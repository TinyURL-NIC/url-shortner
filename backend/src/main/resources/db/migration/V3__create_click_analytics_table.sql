CREATE SEQUENCE IF NOT EXISTS click_analytics_id_seq;

CREATE TABLE click_analytics (
    id          BIGINT        PRIMARY KEY DEFAULT nextval('click_analytics_id_seq'),
    url_id      BIGINT        NOT NULL REFERENCES urls(id) ON DELETE CASCADE,
    ip_address  VARCHAR(45),
    user_agent  VARCHAR(512),
    country     VARCHAR(100),
    city        VARCHAR(100),
    referer     VARCHAR(2048),
    clicked_at  TIMESTAMP     NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_click_analytics_url_id ON click_analytics(url_id);
