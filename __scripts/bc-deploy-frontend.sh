#!/bin/bash

start_time=$(date +%s)
echo "Deploying BookCars frontend..."

cd /opt/BookCars
git pull
sudo chmod +x -R /opt/BookCars/__scripts

cd /opt/BookCars/frontend

npm install
npm run build

sudo rm -rf /var/www/BookCars/frontend
sudo mkdir -p /var/www/BookCars/frontend
sudo cp -rf build/* /var/www/BookCars/frontend

sudo rm -rf /var/cache/nginx
sudo systemctl restart nginx
sudo systemctl status nginx --no-pager

finish_time=$(date +%s)
elapsed_time=$((finish_time - start_time))
((sec=elapsed_time%60, elapsed_time/=60, min=elapsed_time%60))
timestamp=$(printf "BookCars frontend deployed in %d minutes and %d seconds." $min $sec)
echo "$timestamp"

#$SHELL
