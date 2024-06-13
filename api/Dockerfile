# syntax=docker/dockerfile:1

FROM node:lts-alpine
WORKDIR /BookCars/api
COPY ./api ./
COPY ./packages /BookCars/packages
RUN mkdir -p /var/www/cdn/BookCars/users
RUN mkdir -p /var/www/cdn/BookCars/temp/users
RUN mkdir -p /var/www/cdn/BookCars/cars
RUN mkdir -p /var/www/cdn/BookCars/temp/cars
RUN npm install --omit=dev
CMD [ "npm", "start"]
EXPOSE 4002
