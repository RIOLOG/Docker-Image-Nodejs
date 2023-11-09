FROM node:latest
COPY . .
RUN npm install
EXPOSE 4244
CMD [ "node", "index.js" ]