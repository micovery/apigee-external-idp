pipeline {

    parameters {
        string(defaultValue: '', description: '', name: 'APIGEE_USER', trim: false)
        password(defaultValue: '', description: '', name: 'APIGEE_PASSWORD')
        string(defaultValue: '', description: '', name: 'APIGEE_ORG', trim: false)
        string(defaultValue: '', description: '', name: 'APIGEE_ENV', trim: false)
    }

    agent {
      dockerfile true
    }

    stages {
        stage('build') {
            steps {
                sh 'mvn --version'
            }
        }
    }
}