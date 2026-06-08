# ── Stage 1: Build ────────────────────────────────────────────────
# Use Eclipse Temurin (official OpenJDK) Java 21 with Maven
FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /app

# Copy Maven wrapper and pom.xml first — this layer is cached
# and won't re-run unless dependencies change
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./

# Make mvnw executable and pre-download all dependencies
# -B = batch mode (no progress bars), -q = quiet
RUN chmod +x mvnw && ./mvnw dependency:go-offline -B -q

# Now copy source code and build the JAR
# -DskipTests: tests run in CI pipeline (GitHub Actions), not in Docker build
COPY src/ src/
RUN ./mvnw package -B -q -DskipTests

# ── Stage 2: Runtime ──────────────────────────────────────────────
# Use slim JRE-only image for the final image (smaller, more secure)
FROM eclipse-temurin:21-jre-alpine AS runtime

WORKDIR /app

# Install curl for health checks (alpine has wget by default but curl is cleaner)
RUN apk add --no-cache curl

# Create a non-root user to run the app (security best practice)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy only the built JAR from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Set ownership to non-root user
RUN chown appuser:appgroup app.jar
USER appuser

# Spring Boot runs on port 8080 by default
EXPOSE 8080

# Health check using the /health endpoint from HealthController.java
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Run the Spring Boot application
# -Djava.security.egd speeds up startup (common Spring Boot optimization)
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar"]
