# Contributing Guidelines

Thank you for your interest in contributing to the **URL Shortener** project. This document outlines the process for contributing to the project and helps ensure a consistent development workflow.

---

# Code of Conduct

All contributors are expected to:

* Be respectful and professional in all communications.
* Collaborate constructively with team members.
* Provide clear and helpful feedback during code reviews.
* Follow the project's coding standards and documentation practices.

---

# Prerequisites

Before contributing, ensure that you have:

* Git installed
* Java 21
* Maven 3.9 or later
* Node.js (LTS version)
* PostgreSQL
* Redis
* Docker (optional)

Please refer to the **SETUP.md** document for installation instructions.

---

# Getting Started

## 1. Fork the Repository

Fork the repository to your GitHub account.

## 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/url-shortner.git
```

Navigate into the project directory.

```bash
cd url-shortner
```

---

# Create a New Branch

Always create a new branch before making changes.

Feature branch:

```bash
git checkout -b feature/feature-name
```

Bug fix branch:

```bash
git checkout -b bugfix/issue-name
```

Documentation branch:

```bash
git checkout -b docs/document-name
```

Avoid making changes directly to the `main` branch.

---

# Development Workflow

1. Pull the latest changes from the main branch.
2. Create a new branch.
3. Implement your changes.
4. Test your changes locally.
5. Commit your work.
6. Push the branch to GitHub.
7. Open a Pull Request.

---

# Coding Standards

## Backend (Spring Boot)

* Follow standard Java naming conventions.
* Keep methods focused and reusable.
* Write meaningful class and method names.
* Add comments only where necessary.
* Handle exceptions appropriately.

## Frontend (React)

* Use functional components.
* Keep components modular.
* Use descriptive variable names.
* Avoid unnecessary code duplication.
* Maintain consistent formatting.

---

# Commit Message Guidelines

Write concise and meaningful commit messages.

Examples:

```text
feat: add URL shortening service

fix: resolve redirect issue

docs: update setup guide

test: add unit tests for URL service

refactor: simplify authentication logic
```

Avoid generic commit messages such as:

```text
update

changes

fix

work done
```

---

# Pull Request Guidelines

Before submitting a Pull Request, ensure that:

* The code compiles successfully.
* No existing functionality is broken.
* Documentation is updated if required.
* New features include appropriate tests.
* All unnecessary files are removed.

Your Pull Request should include:

* A brief description of the changes.
* The purpose of the changes.
* Screenshots (if UI changes are involved).
* Related issue number (if applicable).

---

# Reporting Issues

When reporting a bug, include:

* Title
* Description
* Steps to reproduce
* Expected result
* Actual result
* Screenshots (if applicable)
* Operating System
* Browser version (for frontend issues)

Example:

```text
Title:
Redirect fails for expired URLs

Steps:
1. Open the application.
2. Enter an expired short URL.
3. Click Redirect.

Expected:
Display "URL has expired."

Actual:
Internal Server Error.
```

---

# Documentation Contributions

Documentation improvements are always welcome.

When updating documentation:

* Use clear and simple language.
* Keep formatting consistent.
* Verify all commands before submitting.
* Update screenshots if they become outdated.

---

# Testing Before Submission

Before creating a Pull Request, verify that:

* Backend starts successfully.
* Frontend starts successfully.
* Database connection works.
* Redis connection works.
* Existing functionality continues to work.
* New functionality has been tested.

---

# Code Review Process

Each Pull Request will be reviewed by project maintainers.

During review:

* Address all review comments.
* Make requested changes promptly.
* Re-test the application after modifications.
* Update documentation if necessary.

A Pull Request will be merged only after approval from the reviewers.

---

# Need Help?

If you have questions regarding development, testing, or documentation, contact the project maintainers through the project's communication channel before making significant changes.

---

# Thank You

Thank you for contributing to the **URL Shortener** project. Your contributions help improve the quality, reliability, and maintainability of the application.
