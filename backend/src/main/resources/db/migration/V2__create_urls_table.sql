CREATE SEQUENCE IF NOT EXISTS urls_id_seq;

CREATE TABLE urls (
    id           BIGINT        PRIMARY KEY DEFAULT nextval('urls_id_seq'),
    user_id      BIGINT        NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    original_url VARCHAR(2048) NOT NULL,
    short_code   VARCHAR(10)   NOT NULL UNIQUE,
    click_count  BIGINT        NOT NULL DEFAULT 0,
    is_active    BOOLEAN       NOT NULL DEFAULT TRUE,
    expires_at   TIMESTAMP,
    created_at   TIMESTAMP     NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_urls_short_code ON urls(short_code);
CREATE INDEX idx_urls_user_id ON urls(user_id);
