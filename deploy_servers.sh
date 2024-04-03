#!/bin/sh

npm install -g pm2 serve

pm2 logs --nostream

cd /app/api
npm install
pm2 start npm --name backend -- run start --exp-backoff-restart-delay=200 > /dev/null

cd ..
serve dist -s -l 3000

sleep 2
echo 'Finished Deploying !'
pm2 ls