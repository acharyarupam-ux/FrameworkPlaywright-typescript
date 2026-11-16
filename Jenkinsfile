pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npx playwright install chromium'
                bat 'npx playwright test'
            }
        }
    }
}