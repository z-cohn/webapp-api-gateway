FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 4000

CMD ["nodemon", "/usr/app/index.js"]