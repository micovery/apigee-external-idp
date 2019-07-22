pipeline {
    parameters {
        string(defaultValue: 'miguelmendoza@google.com', description: '', name: 'APIGEE_USER', trim: false)
        string(defaultValue: '', description: '', name: 'APIGEE_BEARER', trim: false)
        string(defaultValue: 'demo1337', description: '', name: 'APIGEE_ORG', trim: false)
        string(defaultValue: 'test', description: '', name: 'APIGEE_ENV', trim: false)
        string(defaultValue: 'v1', description: '', name: 'PREFIX', trim: false)

    }

    agent {
      dockerfile true
    }

    stages {
        stage('build-master') {
            steps {
                sh "mvn -ntp install -Ptest -Dorg=${params.APIGEE_ORG} -Denv=${params.APIGEE_ENV} -Dusername=${params.APIGEE_USER} -Dbearer=${params.APIGEE_BEARER} -Dprefix=${params.PREFIX}"
            }
        }
    }
}