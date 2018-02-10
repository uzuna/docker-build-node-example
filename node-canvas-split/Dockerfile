FROM node:8.9.4

ENV appdir /usr/src/app
WORKDIR $appdir
COPY ./ $appdir

RUN npm i 

CMD ["npm", "test"]