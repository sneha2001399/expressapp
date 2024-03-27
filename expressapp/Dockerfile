FROM node:20
WORKDIR /expressapp
COPY package.json .
COPY . .
RUN npm install
CMD ["node","index.js"] || CMD ["npm","start"]
EXPOSE 4000