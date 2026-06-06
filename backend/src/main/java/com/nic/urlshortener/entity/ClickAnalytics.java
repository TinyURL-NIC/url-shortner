package com.yourpackage.urlshortener.entity; // Update this package name

import jakarta.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "click_analytics")
public class ClickAnalytics {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "url_id", nullable = false)
    private Url url;

    @Column(name = "click_timestamp", insertable = false, updatable = false)
    private ZonedDateTime clickTimestamp;

    @Column(name = "ip_address", length = 45)
    private String ipAddress;

    @Column(name = "user_agent", columnDefinition = "TEXT")
    private String userAgent;

    // TODO: Generate Getters and Setters for all fields
}