pipeline {
    agent any

    stages {
        stage('Compile') {
            steps {
                script {
                    // Compile the Java program
                    bat 'javac add.java'
                }
            }
        }
        stage('Run') {
            steps {
                script {
                    // Run the Java program
                    bat 'java Add'
                }
            }
        }
    }
}
