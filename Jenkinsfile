pipeline {
    parameters {
        string(defaultValue: 'demo1337', description: '', name: 'APIGEE_ORG', trim: false)
        string(defaultValue: 'test', description: '', name: 'APIGEE_ENV', trim: false)
    }

    agent {
      dockerfile true
    }

    environment {
       APIGEE_CREDS = credentials('apigee')
    }

    stages {
        stage('build') {
            steps {
                sh "mvn -ntp install -Ptest -Dorg=${params.APIGEE_ORG} -Denv=${params.APIGEE_ENV} -Dusername=${APIGEE_CREDS_USR} -Dpassword=${APIGEE_CREDS_PSW} -DGIT_INFO=${env.GIT_BRANCH}/${env.GIT_COMMIT: -7} -Dprefix=${env.GIT_COMMIT: -7}"
            }

        }
    }
}