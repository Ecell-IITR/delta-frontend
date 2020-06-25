FROM node:latest AS build

LABEL maintainer="E-cell"

WORKDIR /usr/delta/delta-frontend

# Copy the yarn.lock file over to the container
# This command implies an image rebuild when npm dependencies change
COPY ./package.json ./package.json
# COPY ./yarn.lock ./yarn.lock

RUN npm install

COPY . .

RUN npm run build


FROM nginx:stable-alpine

COPY --from=build /usr/delta/delta-frontend/build /delta-frontend
# new

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]