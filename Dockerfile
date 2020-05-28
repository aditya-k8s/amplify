FROM node:12
WORKDIR /usr/src/app
COPY package.json package*.json ./
RUN npm install --only=production
COPY . .


#RUN npm install -g serve
#RUN npm install
#RUN npm run build
EXPOSE 8080
#CMD ["serve", "-s", "-l", "8080", "./build"]
CMD ["npm", "start"]
