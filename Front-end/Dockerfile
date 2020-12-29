FROM node:14.15.3

RUN mkdir -p /workspace

WORKDIR /workspace

COPY package.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "npm", "start" ]