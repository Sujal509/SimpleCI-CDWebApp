pipeline {

    agent any

    environment {
        LOCALDIR = "${WORKSPACE}"
    }

    stages {

        stage('Checkout') {
            steps {
                script {
                    checkout([: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/Sujal509/SimpleCI-CDWebApp.git']]])
                }
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

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh '''
                        npm install
                        npm run build
                    '''
                }
            }
        }

        stage('Cleanup Frontend Directory') {
            steps {
                sh '''
                    cp -rf frontend/dist .
                    rm -r frontend
                '''
            }
        }

        //TODO stage('Test Frontend')

        stage('Upload Files') {
            steps {
                script {
                    sshagent(credentials: ['ssh-credentials-of-your-remote-server']) {
                        sh "rsync -avz --delete --exclude '*@tmp' --exclude '*/node_modules' -e 'ssh -o StrictHostKeyChecking=no' ${LOCALDIR}/ <your_username>@<your_remote_server_ip>:/home/<your_username>/Desktop/SimpleCICDWebApp/"
                    }
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    sshagent(credentials: ['ssh-credentials-of-your-remote-server']) {
                        sh " ssh <your_username>@<your_remote_server_ip> 'cd /home/<your_username>/Desktop/SimpleCICDWebApp && bash setup_and_run_docker_container.sh'"
                    }
                }
            }
        }
    }

    post {
        always {
            emailext (
                mimeType: "text/html",
                from: "<your-email-address>",
                replyTo: "<your-replyto-email-address>",
                subject: "Pipeline status of ${BUILD_NAME}",
                body: '''<html>
                            <body>
                                <p>Build Status : ${BUILD_STATUS}</p>
                                <p>Check details over <a href="${BUILD_URL}">here</a></p>
                            </body>
                        </html>'''
            )
        }
    }
}