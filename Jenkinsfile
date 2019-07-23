pipeline {
    parameters {
        string(defaultValue: 'miguelmendoza@google.com', description: '', name: 'APIGEE_USER', trim: false)
        password(defaultValue: '', description: '', name: 'APIGEE_PASSWORD')
        string(defaultValue: 'demo1337', description: '', name: 'APIGEE_ORG', trim: false)
        string(defaultValue: 'test', description: '', name: 'APIGEE_ENV', trim: false)

    }

    agent {
      dockerfile true
    }

    stages {
        stage('build') {
            steps {
                sh "mvn -ntp install -Ptest -Dorg=${params.APIGEE_ORG} -Denv=${params.APIGEE_ENV} -Dusername=${params.APIGEE_USER} -Dpassword=${params.APIGEE_PASSWORD} -DGIT_INFO=${env.GIT_BRANCH}/${env.GIT_COMMIT} -Dprefix=${env.GIT_COMMIT} -Dproxy_name_prefix=${env.GIT_COMMIT}"

                sh "apigeelint -s apiproxy -f table.js"
            }

        }
    }
}