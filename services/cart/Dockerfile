FROM node:9.2

COPY package*.json ./
RUN npm install

COPY index.js ./

CMD ["npm", "start"]
