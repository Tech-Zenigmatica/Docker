FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN npm install -g serve

EXPOSE 3001

CMD ["serve", "-s", "."]

