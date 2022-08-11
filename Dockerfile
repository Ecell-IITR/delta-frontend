FROM node:latest AS build

LABEL maintainer="E-cell"

WORKDIR /usr/delta/delta-frontend

# Copy the yarn.lock file over to the container
# This command implies an image rebuild when npm dependencies change
COPY ./package.json ./package.json
# COPY ./yarn.lock ./yarn.lock

RUN npm install 

RUN npm rebuild node-sass

COPY . .

RUN npm run build
