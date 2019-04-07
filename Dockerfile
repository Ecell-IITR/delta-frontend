FROM node:8

RUN mkdir -p /usr/delta-frontend
WORKDIR /usr/delta-frontend

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY package.json /usr/delta-frontend
RUN npm install --silent
COPY . /usr/delta-frontend

EXPOSE 3000
CMD ["npm", "start"]