FROM node:14.15.3

RUN mkdir -p /workspace

WORKDIR /workspace

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]