# Use the official MariaDB image as a base
FROM mariadb

COPY db/init/init.sql /docker-entrypoint-initdb.d

# Expose the default MariaDB port
EXPOSE 3306
