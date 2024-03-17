# Dockerfile for Database
FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB=mydatabase
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password

# Copy initialization script
COPY init.sql /docker-entrypoint-initdb.d/
