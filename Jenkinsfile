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
        stage('setup') {
            steps {
                script {
                    env.GIT_SHORT_COMMIT =  env.GIT_COMMIT[-7..-1]

                    env.BUILD_USER = wrap([$class: 'BuildUser']) {
                        if (env.BUILD_USER_ID == null) {
                            return 'trigger'
                        }
                        return env.BUILD_USER_ID
                    }

                    env.APIGEE_BUILD_DESC = "Built by " + env.BUILD_USER + " from " +
                        "branch: " + env.GIT_BRANCH  + ", " +
                        "commit: " + env.GIT_SHORT_COMMIT + ", " +
                        "url: " + env.BUILD_URL;

                    if (env.GIT_BRANCH == "master") {
                        env.APIGEE_PREFIX = ""
                    } else {
                        env.APIGEE_PREFIX = env.GIT_BRANCH;
                    }
                }
            }
        }

        stage('build') {
            steps {
                sh "mvn -ntp install -Ptest -Dorg=${params.APIGEE_ORG} -Denv=${params.APIGEE_ENV} -Dusername=${APIGEE_CREDS_USR} -Dpassword=${APIGEE_CREDS_PSW} -Dprefix=${env.APIGEE_PREFIX} -DAPIGEE_BUILD_DESC='${env.APIGEE_BUILD_DESC}'"
            }
        }
    }
}

