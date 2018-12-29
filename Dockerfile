FROM node:10.5.0
WORKDIR /usr/app
COPY . .
RUN npm install -g yarn
RUN yarn install --quiet
EXPOSE 3000
CMD ["yarn", "start"]