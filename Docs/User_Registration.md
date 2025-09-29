
# **OAuth User Registration & Database Testing: A Complete Guide**

User registration in modern web applications is no longer just about email and password. Most apps today integrate with **OAuth providers** like Google, GitHub, and Facebook to allow users to log in quickly without creating new passwords. However, supporting multiple login methods introduces complexity in managing users, emails, and provider accounts. This guide walks you through designing a **robust database schema**, handling **OAuth registration**, and testing it using **JMeter**.

---

## **1. Understanding the Problem**

When users can log in using multiple OAuth providers, we face several challenges:

1. **Canonical Email**

   * Users may log in via Google today, GitHub tomorrow.
   * Different providers may return **different emails** for the same person.
   * We need to decide which email is the authoritative one (`users.email`).

2. **Multiple Providers per User**

   * One user can have accounts linked from **Google, GitHub, Facebook, etc.**.
   * Each provider must be mapped to the same internal user.

3. **Transactional Integrity**

   * User creation and linking to OAuth provider must be **atomic**.
   * If one step fails, the other must not leave orphaned records.

4. **Testability**

   * We want to ensure that the registration flow behaves correctly under all scenarios.
   * This requires database queries and automated tests.

---

## **2. Database Design**

A clean schema is essential for handling multiple OAuth providers safely. We need **two main tables**:

### **2.1 Users Table**

The `user` table holds the **canonical identity** of a person.

```sql
CREATE TABLE "user" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR,
    reputation_score INT DEFAULT 0,
    status user_status DEFAULT 'active',
    profile_pic_url VARCHAR,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    deleted_at TIMESTAMP,
    is_verified BOOLEAN DEFAULT FALSE,
    locked_until TIMESTAMP,
    last_login TIMESTAMP
);
```

**Key Points:**

* `"user"` is quoted because `user` is a reserved keyword in PostgreSQL.
* `email` is the **canonical email** — it should not be overwritten by OAuth providers.
* `is_verified` can be set to `TRUE` if the email comes verified from an OAuth provider.

---

### **2.2 OAuth Accounts Table**

The `oauth_account` table maps users to OAuth providers. This is the **ledger of login methods**.

```sql
CREATE TABLE oauth_account (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    provider VARCHAR(50) NOT NULL,
    provider_acc_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    UNIQUE(provider, provider_acc_id)
);

-- Optional index to improve performance when querying by user_id
CREATE INDEX idx_oauth_user_id ON oauth_account(user_id);
```

**Key Points:**

* `provider_email` stores the email returned by the OAuth provider.
* The combination `(provider, provider_acc_id)` is **unique** to prevent duplicate OAuth accounts.
* Multiple providers can point to the same user.

---

## **3. Registration Flow**

The registration logic depends on the **type of login**: email/password or OAuth.

---

### **3.1 Email/Password Registration**

1. Check if the email exists in `user`.
2. If not, create a new user with `is_verified = false`.
3. No `oauth_account` record is created.

**Example SQL:**

```sql
INSERT INTO "user" (email, username, password_hash, is_verified)
VALUES ('alice@example.com', 'alice', 'hashed_password', false);
```

---

### **3.2 OAuth Registration (Google/GitHub)**

1. Receive data from provider:

   * `provider` (Google, GitHub)
   * `provider_id` (unique ID from provider)
   * `provider_email`
   * `username`, `profile_pic_url`

2. **Check oauth_account for provider_id**:

   * If exists → log in the user.
   * Do **not** overwrite `users.email`.

3. **If oauth_account does not exist**:

   * Check `users` table by `provider_email`.

     * If found → link new `oauth_account`.
     * If not → create new `user` and link `oauth_account`.

**Key Rule:** Never overwrite the canonical `users.email`. Store provider-specific email in `oauth_account`.

---

### **3.3 Transaction Example**

Using PostgreSQL to **safely create a user and link OAuth account in one transaction**:

```sql
BEGIN;

WITH new_user AS (
    INSERT INTO "user" (email, username, is_verified)
    VALUES ('test@test.com', 'testuser', true)
    RETURNING id
)
INSERT INTO oauth_account (user_id, provider, provider_acc_id, provider_email)
SELECT id, 'Google', 'provider_unique_id', 'test@test.com' FROM new_user;

COMMIT;
```

This ensures atomicity: either **both inserts succeed** or none, avoiding orphaned records.

---

## **4. All Registration Scenarios**

| Scenario                                        | Action                  | Expected `users` State | Expected `oauth_account` State | Notes                          |
| ----------------------------------------------- | ----------------------- | ---------------------- | ------------------------------ | ------------------------------ |
| Google login first time                         | New user via Google     | New user created       | New `oauth_account` created    | Users.email = provider email   |
| Google login again                              | Same account            | No new user            | No new `oauth_account`         | Email unchanged                |
| GitHub login, same email                        | Same as Google user     | No new user            | New `oauth_account` created    | Users.email unchanged          |
| GitHub login, same provider_id, different email | Existing GitHub account | No change              | `provider_email` updated       | Do not overwrite `users.email` |
| GitHub login, new provider_id, new email        | New OAuth user          | New user created       | New `oauth_account` created    | Normal registration flow       |
| Email/password first, then GitHub               | User exists             | No new user            | `oauth_account` created        | Email verification not needed  |

---

## **5. JMeter Testing**

We can automate registration tests using **JMeter**.

### **5.1 Steps**

1. **Thread Group** → Simulate users logging in.
2. **JDBC Connection Configuration** → Connect to PostgreSQL.
3. **Test Steps**

   * Email/Password registration
   * OAuth registration (all scenarios)
   * Validate DB via **JDBC Request**
   * Fail test if `user_id` is null:

```groovy
def userId = vars.get("RESULT_user_id")
if (!userId || userId.trim().equalsIgnoreCase("null")) {
    AssertionResult.setFailure(true)
    AssertionResult.setFailureMessage("No oauth_account found for provider=${vars.get('provider')} / provider_id=${vars.get('provider_id')}")
}
```

4. **Listeners** → View Results Tree, Aggregate Report

---

## **6. Indexing & Performance**

* `user.email` and `user.username` → Unique constraints → automatically indexed.
* `oauth_account.provider + provider_acc_id` → Unique → automatically indexed.
* Optional: `oauth_account.user_id` → Non-unique index for faster queries fetching all OAuth accounts for a user.

```sql
CREATE INDEX idx_oauth_user_id ON oauth_account(user_id);
```

---

## **7. Best Practices**

* Wrap **user creation + oauth_account linking** in a transaction.
* Always store provider emails in `oauth_account`.
* Do not overwrite canonical `users.email`.
* Rollback transactions if any error occurs.
* Validate test scenarios using JMeter with database assertions.
* Index frequently queried columns for performance.

---

## **8. References**

* [PostgreSQL UUIDs](https://www.postgresql.org/docs/current/datatype-uuid.html)
* [OAuth 2.0 Overview](https://oauth.net/2/)
* [JMeter JDBC Request Documentation](https://jmeter.apache.org/usermanual/component_reference.html#JDBC_Request)


