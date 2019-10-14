pipeline {
    parameters {
        string(defaultValue: 'demo1337', description: '', name: 'APIGEE_ORG', trim: false)
        string(defaultValue: 'test', description: '', name: 'APIGEE_ENV', trim: false)
    }

    agent {
      dockerfile true
    }

    stages {
        stage('build') {
            environment {
               APIGEE_CREDS = credentials('apigee_login')
            }
            steps {
                sh "mvn -ntp install -Ptest -Dorg=${params.APIGEE_ORG} -Denv=${params.APIGEE_ENV} -Dusername=${params.APIGEE_CREDS_USR} -Dpassword=${params.APIGEE_CREDS_PSW} -DGIT_INFO=${env.GIT_BRANCH}/${env.GIT_COMMIT} -Dprefix=${env.GIT_COMMIT}"
            }

        }
    }
}