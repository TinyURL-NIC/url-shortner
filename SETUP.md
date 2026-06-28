

## Introduction

This document provides step-by-step instructions to set up the **URL Shortener** project in a local development environment. Follow the steps below to install all required software, configure the project, and run both the frontend and backend services.

---

# Prerequisites

Before starting, ensure the following software is installed on your system.

| Software                    | Recommended Version |
| --------------------------- | ------------------- |
| Git                         | Latest Stable       |
| Java                        | JDK 21              |
| Maven                       | 3.9+                |
| Node.js                     | 20.x LTS            |
| npm                         | Latest              |
| PostgreSQL                  | 15+                 |
| Redis                       | Latest Stable       |
| Docker Desktop *(Optional)* | Latest              |

---

# Clone the Repository

Clone the repository using Git.

```bash
git clone https://github.com/TinyURL-NIC/url-shortner.git
```

Move into the project directory.

```bash
cd url-shortner
```

---

# Project Structure

```
url-shortner/
│
├── backend/
├── frontend/
├── docker/
├── docs/
└── README.md
```

---

# Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

Install dependencies and build the project.

```bash
./mvnw clean install
```

Or, if Maven is installed globally:

```bash
mvn clean install
```

Run the Spring Boot application.

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

The backend server will start on the configured port (default: **8080**).

---

# Database Setup

Install PostgreSQL.

Create a database for the application.

Example:

```sql
CREATE DATABASE url_shortener;
```

Update the database configuration inside:

```
backend/src/main/resources/application.properties
```

or

```
application.yml
```

Configure the following values:

```
Database URL
Database Username
Database Password
```

---

# Redis Setup

Install Redis.

Start the Redis server.

Linux:

```bash
redis-server
```

Windows (using Docker):

```bash
docker run -p 6379:6379 redis
```

Ensure Redis is running before starting the backend.

---

# Frontend Setup

Navigate to the frontend directory.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The frontend application will start on the configured development port (commonly **5173** or **3000**, depending on the project configuration).

---

# Running with Docker (Optional)

If Docker Compose is configured, run:

```bash
docker compose up --build
```

or

```bash
docker-compose up --build
```

This will start all required services, including:

* Backend
* Frontend
* PostgreSQL
* Redis

---

# Verify Installation

After setup:

* Backend server starts successfully.
* Frontend loads without errors.
* Database connection is established.
* Redis connection is active.
* Application homepage opens in the browser.
* API requests return expected responses.

---

# Common Issues

### Java Version Error

Ensure Java 21 is installed.

Check using:

```bash
java -version
```

---

### Maven Not Found

Verify Maven installation.

```bash
mvn -version
```

---

### Node.js Not Found

Verify installation.

```bash
node -v
npm -v
```

---

### Database Connection Failed

* Check PostgreSQL is running.
* Verify database credentials.
* Ensure the database exists.

---

### Redis Connection Failed

Check whether Redis is running.

```bash
redis-cli ping
```

Expected output:

```
PONG
```

---

### Port Already in Use

If the default ports are occupied, update the server configuration or stop the conflicting process.

---

# Development Workflow

1. Pull the latest changes.
2. Create a new feature branch.
3. Make code changes.
4. Test locally.
5. Commit changes.
6. Push the branch.
7. Create a Pull Request.

---

# Additional Notes

* Always pull the latest changes before starting development.
* Keep environment-specific configuration outside version control where applicable.
* Follow the project's coding standards and contribution guidelines.
