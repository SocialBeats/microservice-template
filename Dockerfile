FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm ci --production && \
    rm -rf $(npm get cache)

ENTRYPOINT ["node", "main.js"]