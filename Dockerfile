FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN yarn 

COPY . .

EXPOSE 3000
CMD [ "yarn", "dev" ]
