# Final stage
FROM node:latest

WORKDIR /app

COPY ascii.txt ascii.txt
COPY index.js index.js
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . . 

CMD ["node", "index.js"]