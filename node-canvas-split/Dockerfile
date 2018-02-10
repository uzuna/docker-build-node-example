FROM node:8.9.4-alpine

RUN apk add --no-cache \
    cairo \
    jpeg \
    pango \
    giflib

ENV appdir /usr/src/app
WORKDIR $appdir

COPY ./app $appdir


CMD ["npm", "test"]