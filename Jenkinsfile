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
         stage('Test') {
            steps {
                bat '''
                    npm run test
                   '''
                }
          }
        stage('Deployment') {
            steps {
                bat '''
                   curl -X GET https://api.render.com/deploy/srv-cg45ju7dvk4st71blphg?key=694nIRWHHVk
                   '''
            }
        }
       
        stage('End') {
            steps {
                echo 'Build has run successfully'
            }
        }

    }
    
     post {
        always {
            emailext attachLog: true, 
                body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at 
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p> 
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'", 
                to: 'rmwangi22020@gmail.com'
        }
        failure {
            emailext attachLog: true, 
                body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at 
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p> 
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: FAILURE -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'", 
                to: 'rmwangi22020@gmail.com'
        }
    
}
