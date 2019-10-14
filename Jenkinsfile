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
        stage('setup-generic') {
            steps {
                script {
                    env.GIT_SHORT_COMMIT =  env.GIT_COMMIT[-7..-1]
                    env.BUILD_USER = wrap([$class: 'BuildUser']) { return env.BUILD_USER_ID }
                    env.APIGEE_BUILD_DESC = "Built by " + env.BUILD_USER + " from "
                        "branch: " + env.GIT_BRANCH  + ", " +
                        "commit: " + env.GIT_SHORT_COMMIT + ", " +
                        "url: " + env.BUILD_URL;
                }
            }
        }
        stage('setup-feature/bug') {
            when {
                anyOf { branch 'feature/*'; branch 'bug/*' }
            }
            steps {
                script {
                    env.APIGEE_PREFIX = env.GIT_BRANCH
                }
            }
        }
        stage('setup-master') {
            when {
                branch "master"
            }
            steps {
                script {
                    env.APIGEE_PREFIX = ""
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

