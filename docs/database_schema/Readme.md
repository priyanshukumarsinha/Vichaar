# Vichaar Database Schema

This repository contains the database schema for **Vichaar**, a modern blogging platform with AI-powered features. The schema is designed to support **user management, content creation, engagement, monetization, discovery, notifications, and admin/moderation**, while maintaining scalability and extensibility.

---

## **Table of Contents**

1. [Overview](#overview)
2. [Entities](#entities)
3. [Relationships](#relationships)
4. [Design Considerations](#design-considerations)
5. [AI & Modern Features](#ai--modern-features)
6. [Usage](#usage)
7. [License](#license)

---

## **Overview**

The Vichaar database schema is built to handle:

* Multiple **user types** (Admin, Premium, Free)
* **OAuth authentication** via Google, GitHub, etc.
* **Posts, drafts, categories, tags, and media**
* **AI-generated content** (summaries, translations, audio)
* **User engagement** (comments, reactions, bookmarks, follows)
* **Notifications, messaging, and feeds**
* **Monetization** (subscriptions, payments, earnings, payouts)
* **Admin & moderation activities**
* **Analytics & AI feedback tracking**

The schema uses **1:1, 1:N, and M:N relationships**, with junction tables for many-to-many associations and self-referencing tables for comments and follows.

---

## **Entities**

### **User & Auth**

* **Users** – core user information (name, email, username, role)
* **UserProfiles** – extended profile information (bio, avatar, socials, preferences)
* **AuthProviders** – OAuth login providers
* **Sessions / Tokens** – JWTs, refresh tokens, login sessions
* **Roles & Permissions** – access control

### **Content**

* **Posts** – blog articles
* **PostDrafts** – drafts and scheduled posts
* **Categories** – post categories (Tech, Travel, etc.)
* **Tags** – keywords/topics
* **PostTags** – junction table for Posts ↔ Tags
* **MediaFiles** – images, videos, attachments
* **AIContent** – AI-generated summaries, audio, translations

### **Engagement**

* **Comments** – comments on posts
* **CommentReplies** – nested comments (self-referencing)
* **Reactions** – likes/claps for posts
* **CommentReactions** – reactions to comments
* **Follows** – self-referencing users table for followers
* **Bookmarks / SavedPosts** – posts saved by users
* **Reports** – reported posts/comments

### **Discovery & Feeds**

* **Feeds** – personalized content feeds
* **TrendingPosts** – cached trending rankings
* **SearchIndex** – optimized search for posts, tags, and users

### **Notifications & Messaging**

* **Notifications** – in-app alerts (new follower, comment, etc.)
* **Messages** – private or group messages

### **Monetization**

* **Subscriptions** – premium membership plans
* **Payments** – transaction history
* **Earnings** – creator revenue breakdown
* **Payouts** – creator withdrawals

### **Admin & Moderation**

* **AdminActions** – log of admin activities
* **AuditLogs** – track system-wide changes
* **FlaggedContent** – posts/comments flagged by AI or users

### **System / Misc**

* **Settings** – platform-wide configuration
* **UserPreferences** – language, theme, notifications
* **Analytics** – views, read time, engagement stats
* **AIFeedback** – logs of AI suggestions, corrections, moderation

---

## **Relationships**

* **Users ↔ UserProfiles** → 1:1
* **Users ↔ AuthProviders** → 1:N
* **Users ↔ Sessions/Tokens** → 1:N
* **Users ↔ Roles** → M:N
* **Users ↔ Posts** → 1:N
* **Posts ↔ Tags** → M:N (via PostTags)
* **Posts ↔ Categories** → N:1
* **Posts ↔ MediaFiles / AIContent** → 1:N
* **Posts ↔ Comments** → 1:N
* **Comments ↔ CommentReplies** → self-referencing 1:N
* **Posts / Comments ↔ Reactions / CommentReactions** → 1:N
* **Users ↔ Follows** → M:N self-referencing
* **Users ↔ Bookmarks** → M:N
* **Posts / Comments ↔ Reports** → 1:N
* **Users ↔ Notifications** → 1:N
* **Users ↔ Messages** → M:N via MessageThreads
* **Subscriptions ↔ Payments** → 1:N
* **Earnings ↔ Payouts** → 1:N
* **Posts / Comments ↔ FlaggedContent** → 1:N

---

## **Design Considerations**

* **Normalization** – data is normalized to reduce redundancy
* **Scalability** – supports millions of posts, comments, and users
* **Extensibility** – AI features, analytics, and monetization can be expanded easily
* **Security** – sessions, JWTs, OAuth, and role-based permissions
* **Moderation & Audit** – full logging for admins and AI moderation

---

## **AI & Modern Features**

* **AI-generated summaries, translations, and audio** for posts
* **Personalized feeds** based on reading habits and AI recommendations
* **Trending metrics** calculated from engagement, recency, and views
* **AIFeedback logs** track whether suggestions were accepted or rejected

---

## **Usage**

1. Import the schema into your preferred relational database (PostgreSQL, MySQL, etc.)
2. Use the ERD to plan API endpoints, services, and front-end features
3. Extend tables for future features like PWA support, offline caching, or additional analytics

---

Here is the schema for the Vichaar blogging platform:

![Database Schema](/img/database_schema.png)

---

## **License**

MIT License – free to use, modify, and distribute.


