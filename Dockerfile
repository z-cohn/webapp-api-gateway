FROM node:alpine

RUN apk update
RUN apk upgrade
RUN apk add git

ENV PORT=4000

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE ${PORT}

CMD ["nodemon", "server/server.js"]
