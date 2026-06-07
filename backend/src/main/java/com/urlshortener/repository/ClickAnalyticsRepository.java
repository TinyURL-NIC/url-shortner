package com.urlshortener.repository;

import com.urlshortener.entity.ClickAnalytics;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClickAnalyticsRepository extends JpaRepository<ClickAnalytics, Long> {

    // ✅ Paginated query — safe for millions of clicks
    Page<ClickAnalytics> findByUrlId(Long urlId, Pageable pageable);

    // ✅ Just count — no data loading
    long countByUrlId(Long urlId);
}