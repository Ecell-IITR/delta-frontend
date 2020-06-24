FROM node:9.11

MAINTAINER Ecell IIT Roorkee

# Create app directory
RUN mkdir -p /usr/delta/delta-frontend
WORKDIR /usr/delta/delta-frontend

# Install all dependencies of the current project.
COPY package.json package.json
RUN yarn

# Copy all local files into the image.
COPY . .

RUN yarn build

EXPOSE 3000