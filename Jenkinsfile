pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Start') {
            steps {
                echo 'Build is starting'
            }
        }
        stage('Clone github repository') {
            steps {
                git url: 'https://github.com/Ruthmwangi26/gallery.git', branch: 'master'
            }
        }
        stage('Install dependencies') {
            steps {
                bat '''
                   npm install
                   '''
            }
        }
        
        stage('Deployment') {
            steps {
                bat '''
                   curl -X POST https://api.render.com/deploy/srv-cg45ju7dvk4st71blphg?key=694nIRWHHVk
                   '''
            }
        }
        stage('End') {
            steps {
                echo 'Build has run successfully'
            }
        }
    }
}
