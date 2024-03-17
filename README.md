# My Vite + Node.js Project

## Overview
This project is a simple application that uses Vite for the frontend and Node.js for the backend. The main functionality of this application is to call the backend to get a random number. It also includes a CI/CD pipeline using Jenkins and Docker for building and deploying the application.

## Getting Started

### Prerequisites
- Jenkins
- Docker
- Nodejs
- npm
- pm2

### Installation for Development and Testing of the Application
1. Clone the repo with
  ```git clone https://github.com/Sujal509/SimpleCI-CDWebApp.git```
2. cd into the Project with
  ```cd SimpleCI-CDWebApp```
3. Install the required packages according to your OS
  ```install_node_modules_windows.ps1``` or ```install_node_modules_linux.sh```
4. Modify the environment variables (optional)
5. Start the Application by running ```npm start``` in the `api` and `frontend` directories respectively
6. Go to `http://localhost:3000` (Note :- 3000 is the port set for Vite , you can change this in `vite.config.js`)
7. Explore and Modify !