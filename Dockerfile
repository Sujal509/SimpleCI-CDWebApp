FROM node:alpine

WORKDIR /app

COPY . /app

RUN chmod +x deploy_servers.sh

EXPOSE 3000
EXPOSE 5000

# Set default command to run both servers
CMD ["sh","-c","/app/deploy_servers.sh"]