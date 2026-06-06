package com.yourpackage.urlshortener.entity; // Update this package name

import jakarta.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "urls")
public class Url {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "original_url", nullable = false, columnDefinition = "TEXT")
    private String originalUrl;

    @Column(name = "short_alias", nullable = false, unique = true, length = 50)
    private String shortAlias;

    @Column(columnDefinition = "jsonb")
    private String metadata;

    @Column(name = "expires_at")
    private ZonedDateTime expiresAt;

    @Column(name = "created_at", insertable = false, updatable = false)
    private ZonedDateTime createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    private ZonedDateTime updatedAt;

    // TODO: Generate Getters and Setters for all fields
}