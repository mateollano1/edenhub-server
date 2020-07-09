FROM node:12.16.2-alpine3.10

ENV PORT=80

RUN apk add linux-headers
RUN apk add build-base gcc musl-dev
RUN apk add --no-cache --upgrade bash

COPY . .

RUN npm install

EXPOSE 80

CMD ["node", "main.js"]