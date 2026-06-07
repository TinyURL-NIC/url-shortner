CREATE SEQUENCE IF NOT EXISTS users_id_seq;

CREATE TABLE users (
    id          BIGINT       PRIMARY KEY DEFAULT nextval('users_id_seq'),
    username    VARCHAR(50)  NOT NULL UNIQUE,
    email       VARCHAR(100) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    is_active   BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at  TIMESTAMP    NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMP    NOT NULL DEFAULT NOW()
);
