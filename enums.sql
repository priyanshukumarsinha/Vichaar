-- =====================
-- ENUM types
-- =====================
CREATE TYPE user_status AS ENUM ('active', 'banned', 'inactive');
CREATE TYPE pronoun_type AS ENUM ('male', 'female', 'other', 'prefer_not_say');
CREATE TYPE subscription_plan AS ENUM ('monthly', 'quarterly', 'yearly');
CREATE TYPE subscription_status AS ENUM ('active', 'cancelled', 'expired');