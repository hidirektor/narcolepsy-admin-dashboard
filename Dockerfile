FROM node:latest

WORKDIR /usr/src/app/admin-dashboard

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 4567

CMD ["npx", "serve", "-s", "build", "-l", "4567"]
