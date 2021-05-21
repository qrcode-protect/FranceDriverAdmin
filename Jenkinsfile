/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any

    stages {
        stage('Pull') {
            steps {
                dir('/home/france_driverfr/FranceDriverAdmin') {
                    sh 'git pull https://github.com/qrcode-protect/FranceDriverAdmin.git'
                }
            }
        }
        stage('Compile') {
            steps {
                dir('/home/france_driverfr/FranceDriverAdmin') {
                    sh 'npm install'
                }
            }
        }
        stage('Pm2') {
            steps {
                dir('/home/france_driverfr/FranceDriverAdmin') {
                    sh 'pm2 restart franceadmin'
                }
            }
        }
    }
}
