FROM nginx

MAINTAINER Lab. Autoacceso

WORKDIR /usr/share/nginx/html

COPY _site/ .
