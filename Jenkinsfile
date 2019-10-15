pipeline {
    parameters {
       choice(name: 'env', choices: ['test', 'prod'], description: 'Pick environment')
    }

    agent {
      dockerfile true
    }

    environment {
       APIGEE_CREDS = credentials('apigee')
       HOME = '.'
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
                sh "mvn -ntp install -P${params.env} -Dusername=${APIGEE_CREDS_USR} -Dpassword=${APIGEE_CREDS_PSW} -Dprefix=${env.APIGEE_PREFIX} -DAPIGEE_BUILD_DESC='${env.APIGEE_BUILD_DESC}'"
            }
        }

        stage('test') {
            steps {
                dir('tests') {
                    sh "npm install"
                    sh "npm run test"
                    junit 'xunit.xml'
                }
            }
        }
    }

    post {
       always {
           archiveArtifacts artifacts: '**/target/*.zip', fingerprint: true
           archiveArtifacts artifacts: '**/active-resources/*', fingerprint: true
       }
    }
}

