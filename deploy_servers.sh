#!/bin/sh

npm install -g pm2

pm2 logs --nostream

#Handle ! 0 exit codes
pm2 delete all || true

pm2 logs --nostream

cd /app/api
npm install
pm2 start npm --name backend -- run start --exp-backoff-restart-delay=200 > /dev/null

cd ../frontend
npm install
pm2 start npm --name frontend -- run dev --exp-backoff-restart-delay=200 > /dev/null

sleep 5
pm2 ls
echo 'Finished Deploying !'
pm2 logs