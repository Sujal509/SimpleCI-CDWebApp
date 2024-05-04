# My Vite + Node.js Project

## Overview
Welcome to my project , a seamless integration of Vite and NodeJs. This application is designed with a focus on simplicity and efficiency.

The core functionality of this application lies in its ability to communicate with the backend using API's, demonstrating the power of asynchronous operations in modern web applications.

What sets this project apart is its implementation of a Continuous Integration / Continuous Deployment (CI/CD) pipeline using Jenkins and Docker. This ensures that this application is built and deployed in a consistent and reliable manner, reducing the risk of integration problems and allowing for faster iterations.

This project utilizes 'rsync', a fast and versatile utility that provides fast incremental file transfer and synchronization. It significantly improves the efficiency of data updates and backups. The application is equipped with an email facility, integrated into the Jenkins pipeline.
This allows for effective communication and notifications, enhancing the user experience by keeping stakeholders informed about the status of the CI/CD process.

With this project , I aim to provide a solid foundation for any developer looking to dive into the world of Vite and NodeJs, while also showcasing the benefits of CI/CD in improving the overall quality of software development.
## Getting Started

#### Tested and built with
- Jenkins - 2.440.2
- Docker - 20.10.21
- NodeJs - 20.11.1
- Npm - 10.2.4
- Vite - 5.1.6
- Pm2 - 5.3.1
- Serve - 14.2.1
- Java - 21.0.2
- Rsync - 3.2.7

### Installation for Development and Testing of the Application
1. Clone the repo with
  ```bash
git clone https://github.com/Sujal509/SimpleCI-CDWebApp.git
```
2. cd into the Project with
  ```bash
cd SimpleCI-CDWebApp
```
3. Install the required packages on Windows with
  ```bash
./install_node_modules_windows.ps1
```
or if you are on Linux 
```bash
sudo chmod +x install_node_modules_linux.sh
./install_node_modules_linux.sh
```


4. Modify the environment variables (optional)
5. Start the Application by running `npm start` and `npm run dev` in the api and frontend directories respectively
6. Go to `http://localhost:3000` (Note :- 3000 is the port set for Vite , you can change this in `vite.config.js`)
7. Explore and Modify !

### Deploying with Jenkins and Docker
1. Modify the `Upload Files` and `Deploy Application` stage in the `Jenkinsfile` according to your server
2. Modify the Email credentials accordingly (Note :- You need to setup EmailExt first)
3. Modify the ports in `setup_and_run_docker_container.sh` according to your available ports
4. Run the pipeline in Jenkins , and watch it Deploy !