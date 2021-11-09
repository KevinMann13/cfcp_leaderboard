FROM node:17-slim

WORKDIR /cfcp
ENV NODE_ENV development

# install nodemon globally
RUN npm install nodemon -g

COPY package.json /cfcp/package.json

RUN npm install --production

# COPY .env.example /starter/.env.example
COPY . /cfcp

CMD ["nodemon","server.js"]

EXPOSE 3000
