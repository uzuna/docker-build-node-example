FROM node:8.9.4 AS build-env

ENV appdir /usr/src/app
WORKDIR $appdir
COPY ./ $appdir

RUN npm i 

FROM node:8.9.4-alpine

ENV appdir /usr/src/app
WORKDIR $appdir

COPY --from=build-env ${appdir} ${appdir}


CMD ["npm", "test"]