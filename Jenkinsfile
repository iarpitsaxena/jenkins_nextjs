pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'iarpitsaxena/jenkins_nextjs:latest'
        NEXTAUTH_URL = "http://54.82.149.137"  // ✅ Update with actual EC2 IP
    }
    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-credentials', url: 'https://github.com/iarpitsaxena/jenkins_nextjs.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        stage('Push to DockerHub') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-credentials', url: '']) {
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }
        stage('Deploy on AWS EC2') {
            steps {
                sshagent(['aws-ec2-ssh-key']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ec2-user@54.82.149.137 '
                        docker pull $DOCKER_IMAGE &&
                        docker stop mern-container || true &&
                        docker rm mern-container || true &&
                        docker run -d -p 80:3000 --name mern-container -e NEXTAUTH_URL="http://54.82.149.137" $DOCKER_IMAGE
                    '
                    """
                }
            }
        }
    }
}
