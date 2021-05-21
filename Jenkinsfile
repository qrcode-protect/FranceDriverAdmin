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
    }
}
