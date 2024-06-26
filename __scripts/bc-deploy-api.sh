#!/bin/bash

start_time=$(date +%s)
echo "Deploying BookCars API..."

cd /opt/BookCars
git pull
chmod +x -R /opt/BookCars/__scripts

cd /opt/BookCars/api

npm install --omit=dev

sudo systemctl restart BookCars
sudo systemctl status BookCars --no-pager

finish_time=$(date +%s)
elapsed_time=$((finish_time - start_time))
((sec=elapsed_time%60, elapsed_time/=60, min=elapsed_time%60))
timestamp=$(printf "BookCars API deployed in %d minutes and %d seconds." $min $sec)
echo "$timestamp"

#$SHEL
