# syntax=docker/dockerfile:1

FROM node:lts-alpine as build
WORKDIR /BookCars/backend
COPY ./backend ./
COPY ./backend/.env.docker .env
COPY ./packages /BookCars/packages
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf -- *
COPY --from=build /BookCars/backend/build .
COPY ./backend/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 3001
