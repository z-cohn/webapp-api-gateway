FROM node:alpine

RUN mkdir -p /home/webapp

COPY . /home/webapp

CMD ["node"]
