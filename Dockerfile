FROM node:18.15.0-slim

WORKDIR /usr/app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]