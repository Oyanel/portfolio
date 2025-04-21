FROM node:22.6.0-slim

WORKDIR /app

COPY . .

RUN npm install
RUN npm i sharp

RUN npm run build

EXPOSE 3010
CMD [ "npm", "start" ]