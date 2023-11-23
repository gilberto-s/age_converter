FROM node:16.14.2-alpine3.14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY ./package*.json ./

RUN npm install -g pm2
RUN npm install

COPY . .

RUN npm run build
RUN npm run swagger-autogen
RUN npm run test

EXPOSE 80
EXPOSE 8080

CMD ["npm", "start"]
