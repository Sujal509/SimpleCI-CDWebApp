#!/bin/bash

docker stop $(docker ps -a -q) || true

docker build -t simple-cicd-app .

docker run -d -p 3000:3000 -p 5000:5000 simple-cicd-app