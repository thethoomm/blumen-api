FROM node:22.13.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000