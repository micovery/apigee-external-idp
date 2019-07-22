pipeline {
    parameters {
        string(defaultValue: '', description: '', name: 'APIGEE_USER', trim: false)
        string(defaultValue: '', description: '', name: 'APIGEE_BEARER', trim: false)
        string(defaultValue: '', description: '', name: 'APIGEE_ORG', trim: false)
        string(defaultValue: '', description: '', name: 'APIGEE_ENV', trim: false)
    }

    agent {
      dockerfile true
    }

    stages {
        stage('build') {
            steps {
                sh "mvn -ntp install -Ptest -Dorg=${params.APIGEE_ORG} -Denv=${params.APIGEE_ENV} -Dusername=${params.APIGEE_USER} -Dbearer=${params.APIGEE_BEARER}"
            }
        }
    }
}