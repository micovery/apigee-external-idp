pipeline {
    // agent { docker { image 'maven:3.3.3' } }

    dockerfile {
        filename 'Dockerfile'
        dir 'build'
        label 'runner'
        args '-v /tmp:/tmp'
    }

    stages {
        stage('build') {
            steps {
                sh 'mvn --version'
            }
        }
    }
}