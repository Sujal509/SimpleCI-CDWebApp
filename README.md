# My Vite + Node.js Project

## Overview
Welcome to my project , a seamless integration of Vite and Nodejs. This application is designed with a focus on simplicity and efficiency.

The core functionality of this application lies in its ability to communicate with the backend using API's, demonstrating the power of asynchronous operations in modern web applications.

What sets this project apart is its implementation of a Continuous Integration / Continuous Deployment (CI/CD) pipeline using Jenkins and Docker. This ensures that this application is built and deployed in a consistent and reliable manner, reducing the risk of integration problems and allowing for faster iterations.

With this project , i aim to provide a solid foundation for any developer looking to dive into the world of Vite and Node.js, while also showcasing the benefits of CI/CD in improving the overall quality of software development.
## Getting Started

#### Tested and built with
- Jenkins - 2.440.1
- Docker - 20.10.21
- Node.js - 20.11.1
- Npm - 10.2.4
- Vite - 5.1.6
- Pm2 - 5.3.1
- Java - 21.0.2

### Installation for Development and Testing of the Application
1. Clone the repo with
  ```bash
git clone https://github.com/Sujal509/SimpleCI-CDWebApp.git
```
3. cd into the Project with
  ```bash
cd SimpleCI-CDWebApp
```
5. Install the required packages on Windows with
  ```bash
./install_node_modules_windows.ps1
```
or if you are on Linux 
```bash
sudo chmod +x install_node_modules_linux.sh
./install_node_modules_linux.sh
```


7. Modify the environment variables (optional)
8. Start the Application by running `npm start` and `npm run dev` in the api and frontend directories respectively
9. Go to `http://localhost:3000` (Note :- 3000 is the port set for Vite , you can change this in `vite.config.js`)
10. Explore and Modify !

### Deploying with Jenkins and Docker
1. Modify the `Deploy Application` stage according to your server
2. Modify the ports in `setup_and_run_docker_container.sh` according to your available ports
3. Run the pipeline in Jenkins , and watch it Deploy !
