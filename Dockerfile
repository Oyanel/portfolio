FROM node:22.6.0-slim

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]