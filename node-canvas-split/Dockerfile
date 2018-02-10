FROM node:8.9.4-alpine AS build-env

ENV appdir /usr/src/app
WORKDIR $appdir
COPY ./ $appdir

RUN apk add --no-cache \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev
RUN npm i 

FROM node:8.9.4-alpine

ENV appdir /usr/src/app
WORKDIR $appdir

COPY --from=build-env ${appdir} ${appdir}


RUN apk add --no-cache \
    cairo \
    jpeg \
    pango \
    giflib


CMD ["npm", "test"]