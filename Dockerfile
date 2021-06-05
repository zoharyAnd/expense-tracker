FROM node:14-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /srv/client
WORKDIR /srv/client

RUN apk add \
    git \
;

# Installing dependencies
COPY package.json yarn.lock .env* /srv/client/
RUN yarn install

# Copying source files
COPY . /srv/client

# Building app
RUN yarn build
EXPOSE 3000

# Running the app
CMD "yarn" "start"
