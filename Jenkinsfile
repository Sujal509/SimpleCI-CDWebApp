/*Prerequisites
* Replace your github url and branch name in the Checkout stage
*
* Replace USER and IP with your proper Credentials
*
* Replace Email Credentials accordingly
*
* For ssh to work correctly make sure you have 'ssh-credentials-of-your-remote-server' configured correctly
* 
* 'rsync' is used to sync the Jenkins workspace with the remote servers directory
*
* Developed by Sujal509
*/

pipeline {

    agent any

    environment {
        USER = "<your_username_of_remote_server>"
        IP = "<your_ip_of_remote_server>"

        LOCALDIR = "${WORKSPACE}/"
        PRODDIR = "/home/${USER}/Desktop/SimpleDemoApp/"
        
        EMAIL_FROM = "<your_email_address>"
        EMAIL_REPLY_TO = "<your_reply_to_address>"
        EMAIL_TO = "<email_address_where_email_is_sent>"
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
                        sh "rsync -avz --delete --exclude '*@tmp' --exclude '*/node_modules' -e 'ssh -o StrictHostKeyChecking=no' ${LOCALDIR} ${USER}@${IP}:/home/${USER}/Desktop/SimpleCICDWebApp/"
                    }
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    sshagent(credentials: ['ssh-credentials-of-your-remote-server']) {
                        sh " ssh ${USER}@${IP} '${PRODDIR} && bash setup_and_run_docker_container.sh'"
                    }
                }
            }
        }
    }

    post {
        always {
            emailext (
                mimeType: "text/html",
                from: "${EMAIL_FROM}",
                replyTo: "${EMAIL_REPLY_TO}",
                to: "${EMAIL_TO}",
                subject: "Pipeline status of ${BUILD_NAME}",
                body: """<html>
                            <body>
                                <p>Build Status : ${BUILD_STATUS}</p>
                                <p>Check details over <a href="${BUILD_URL}">here</a></p>
                            </body>
                        </html>"""
            )
        }
    }
}