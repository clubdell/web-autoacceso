FROM ruby:2.5.1-alpine

MAINTAINER Lab. Autoacceso

RUN apk upgrade --update \
    && apk add --virtual build-dependencies build-base ruby-dev libffi-dev

WORKDIR /usr/src

RUN gem install --no-rdoc --no-ri jekyll

COPY . .

CMD jekyll serve --host=0.0.0.0
