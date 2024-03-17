pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/Sujal509/SimpleCI-CDWebApp.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('api') {
                    sh 'npm install'
                }
            }
        }

        stage('Test Api') {
            steps {
                dir('api') {
                    sh 'npm test'
                }
            }
        }

        //TODO stage('Test Frontend')

        stage('Deploy Application') {
            steps {
                script {
                    sshagent(credentials: ['ssh-credentials-of-your-remote-server']) {
                        sh '''
                            ssh <your_username>@<your_remote_server_ip> "cd /home/<your_username>/Desktop/SimpleCICDWebApp && rm -r * || true "
                            find ${WORKSPACE} -mindepth 1 -maxdepth 1 -not -empty -not -name "*@tmp" -not -name ".git" -not -name "node_modules" -exec scp -r {} <your_username>@<your_remote_server_ip>:/home/<your_username>/Desktop/SimpleCICDWebApp/ \\;
		                    ssh <your_username>@<your_remote_server_ip> "cd /home/<your_username>/Desktop/SimpleCICDWebApp && bash setup_and_run_docker_container.sh "
                        '''
                    }
                }
            }
        }
    }
}