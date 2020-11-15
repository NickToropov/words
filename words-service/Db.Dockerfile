FROM postgres:9.6.11-alpine

ENV POSTGRES_DB words
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD 123

COPY initdb.sql /docker-entrypoint-initdb.d