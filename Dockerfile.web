# build environment
FROM node:12.2.0-alpine as build
# set working directory
WORKDIR /app 
# add '/app/node_modules/.bin' to PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package.json /app/package.json
RUN npm install 
RUN npm install react-scripts@3.0.1 -g
# copy React app to container
COPY . /app
EXPOSE 5000
RUN npm run build
CMD ["npm", "start"]

