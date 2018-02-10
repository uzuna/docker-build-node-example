FROM node:8.9.4-alpine AS build-env

RUN apk add --no-cache \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev

ENV appdir /usr/src/app
WORKDIR $appdir
COPY ./ $appdir

RUN npm i 

FROM node:8.9.4-alpine
RUN apk add --no-cache \
    cairo \
    jpeg \
    pango \
    giflib

ENV appdir /usr/src/app
WORKDIR $appdir
COPY --from=build-env $appdir $appdir


CMD ["npm", "test"]