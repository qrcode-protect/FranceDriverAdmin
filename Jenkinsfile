/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    environment {
        dir = '/home/france_driverfr/FranceDriverAdmin'
        home = '/home'
    }
    stages {
        stage('Pull') {
            steps {
                dir(env.dir) {
                    sh 'git pull https://github.com/qrcode-protect/FranceDriverAdmin.git'
                }
            }
        }
        stage('Compile') {
            steps {
                dir(env.dir) {
                    sh 'npm install'
                }
            }
        }
        stage('Reaload') {
            steps {
                dir(env.home){
                    sh 'pm2 restart franceadmin'
                }
               
            }
        }
    }
}
