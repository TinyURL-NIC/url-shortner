# Testing Checklist

## Purpose

This document provides a checklist for verifying the functionality, reliability, and quality of the **URL Shortener** project. It serves as a guide for developers and QA engineers to ensure that new features work as expected before being merged into the main branch.

---

# Testing Environment

| Item             | Details                                        |
| ---------------- | ---------------------------------------------- |
| Operating System | Windows 10/11, Linux, macOS                    |
| Backend          | Spring Boot 3                                  |
| Frontend         | React                                          |
| Database         | PostgreSQL                                     |
| Cache            | Redis                                          |
| API Testing      | Postman                                        |
| Browser          | Google Chrome, Mozilla Firefox, Microsoft Edge |

---

# Setup Verification

Before testing, ensure the following:

| Check                            | Status |
| -------------------------------- | ------ |
| Repository cloned successfully   | ☐      |
| Dependencies installed           | ☐      |
| Backend starts successfully      | ☐      |
| Frontend starts successfully     | ☐      |
| PostgreSQL is running            | ☐      |
| Redis is running                 | ☐      |
| Environment variables configured | ☐      |
| Application loads without errors | ☐      |

---

# Functional Testing Checklist

## User Interface

| Test Case                        | Status |
| -------------------------------- | ------ |
| Homepage loads successfully      | ☐      |
| Navigation works correctly       | ☐      |
| Buttons respond correctly        | ☐      |
| Forms display properly           | ☐      |
| Error messages are user-friendly | ☐      |
| Layout is responsive             | ☐      |

---

## URL Shortening

| Test Case                                | Status |
| ---------------------------------------- | ------ |
| Valid URL is shortened successfully      | ☐      |
| Generated short URL is unique            | ☐      |
| Short URL redirects correctly            | ☐      |
| Custom alias works correctly             | ☐      |
| Duplicate alias is rejected              | ☐      |
| Invalid URL is rejected                  | ☐      |
| Empty input is validated                 | ☐      |
| Expired URL displays appropriate message | ☐      |

---

## Authentication (If Implemented)

| Test Case                               | Status |
| --------------------------------------- | ------ |
| User registration                       | ☐      |
| User login                              | ☐      |
| Invalid login credentials               | ☐      |
| JWT authentication                      | ☐      |
| Logout functionality                    | ☐      |
| Protected routes require authentication | ☐      |

---

## Analytics (If Implemented)

| Test Case                     | Status |
| ----------------------------- | ------ |
| Click count updates correctly | ☐      |
| Analytics page loads          | ☐      |
| Statistics display accurately | ☐      |
| Date filtering works          | ☐      |

---

# API Testing

Verify all API endpoints.

| Test Case                              | Status |
| -------------------------------------- | ------ |
| Create short URL                       | ☐      |
| Redirect endpoint                      | ☐      |
| Retrieve URL details                   | ☐      |
| Update URL (if supported)              | ☐      |
| Delete URL (if supported)              | ☐      |
| Invalid API requests handled correctly | ☐      |

---

# Database Testing

| Test Case                     | Status |
| ----------------------------- | ------ |
| URL records stored correctly  | ☐      |
| Duplicate entries prevented   | ☐      |
| Database constraints enforced | ☐      |
| Data retrieval accurate       | ☐      |

---

# Redis Testing

| Test Case                         | Status |
| --------------------------------- | ------ |
| Cache connection established      | ☐      |
| Cached URLs retrieved correctly   | ☐      |
| Cache updates after URL creation  | ☐      |
| Cache invalidation works properly | ☐      |

---

# Security Testing

| Test Case                             | Status |
| ------------------------------------- | ------ |
| SQL Injection protection              | ☐      |
| Cross-Site Scripting (XSS) prevention | ☐      |
| JWT token validation                  | ☐      |
| Unauthorized API access blocked       | ☐      |
| Sensitive information not exposed     | ☐      |

---

# Performance Testing

| Test Case                              | Status |
| -------------------------------------- | ------ |
| Homepage loads within acceptable time  | ☐      |
| URL generation is responsive           | ☐      |
| Redirect latency is acceptable         | ☐      |
| API response time is acceptable        | ☐      |
| Multiple requests handled successfully | ☐      |

---

# Browser Compatibility

| Browser         | Status |
| --------------- | ------ |
| Google Chrome   | ☐      |
| Mozilla Firefox | ☐      |
| Microsoft Edge  | ☐      |

---

# Mobile Responsiveness

| Device  | Status |
| ------- | ------ |
| Desktop | ☐      |
| Tablet  | ☐      |
| Mobile  | ☐      |

---

# Documentation Review

Verify that:

| Check                          | Status |
| ------------------------------ | ------ |
| README is up to date           | ☐      |
| SETUP.md is accurate           | ☐      |
| CONTRIBUTING.md is complete    | ☐      |
| API documentation is updated   | ☐      |
| Markdown formatting is correct | ☐      |

---

# Regression Testing

After implementing new features, verify that:

* Existing functionality still works.
* No new bugs have been introduced.
* Previous issues remain fixed.
* API responses remain unchanged unless intentionally modified.

---

# Defect Tracking

For each identified issue, record:

| Field              | Description                            |
| ------------------ | -------------------------------------- |
| Bug ID             | Unique identifier                      |
| Title              | Short description                      |
| Severity           | Critical / High / Medium / Low         |
| Priority           | High / Medium / Low                    |
| Environment        | Test environment details               |
| Steps to Reproduce | Reproducible steps                     |
| Expected Result    | Desired behavior                       |
| Actual Result      | Observed behavior                      |
| Status             | Open / In Progress / Resolved / Closed |

---

# Test Completion Criteria

Testing is considered complete when:

* All critical test cases have passed.
* No critical or high-severity defects remain open.
* Documentation has been reviewed and updated.
* The application builds successfully.
* QA approval has been provided for the release.

---

# Revision History

| Version | Date       | Author  | Description               |
| ------- | ---------- | ------- | ------------------------- |
| 1.0     | YYYY-MM-DD | QA Team | Initial testing checklist |
