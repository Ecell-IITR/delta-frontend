FROM node:stretch-slim

LABEL maintainer="E-cell"

# Create app directory
RUN mkdir -p /usr/delta/delta-frontend
WORKDIR /usr/delta/delta-frontend


# Copy the yarn.lock file over to the container
# This command implies an image rebuild when npm dependencies change
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000