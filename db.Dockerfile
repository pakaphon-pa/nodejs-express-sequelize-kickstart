FROM mysql:5.7

COPY db/init-db.sql /docker-entrypoint-initdb.d/