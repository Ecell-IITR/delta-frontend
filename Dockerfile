FROM node:latest AS build

LABEL maintainer="E-cell"

WORKDIR /usr/delta/delta-frontend

# Copy the yarn.lock file over to the container
# This command implies an image rebuild when npm dependencies change
COPY ./package.json ./package.json

COPY ./yarn.lock ./yarn.lock

RUN yarn add node-sass@npm:sass

RUN yarn

COPY . .

RUN yarn lint:fix 

RUN yarn run build