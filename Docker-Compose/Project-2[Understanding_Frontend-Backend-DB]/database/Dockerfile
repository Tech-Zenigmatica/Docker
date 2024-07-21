# Use a database image, e.g., SQLite, Postgres, or MySQL
FROM postgres:alpine

# Copy the initialization SQL script
COPY init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_USER=yourusername
ENV POSTGRES_PASSWORD=yourpassword
ENV POSTGRES_DB=yourdatabase

