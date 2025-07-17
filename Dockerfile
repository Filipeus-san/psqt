FROM php:8.2-cli

COPY ./bin/psqt-linux /usr/local/bin/psqt
RUN chmod +x /usr/local/bin/psqt