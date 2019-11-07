podTemplate(containers: [
    containerTemplate(name: 'node', image: 'node:8.16.2-alpine', ttyEnabled: true, envVars:[(key: "HOME",value: "/home/jenkins/agent")],command: 'cat')
  ]) {
    node(POD_LABEL) {
        stage('Checkout node-peoject-example') {
            git 'https://github.com/vic614/node-project-sample'
            container('node') {
                stage('Setup') {
                    sh 'npm install'
                }
                stage('Build node') {
                    sh 'npm run build'
                }
                stage('Test code') {
                    sh 'echo running lint ...'
                    sh 'npm run lint'
                    sh 'echo running test ...'
                    sh 'npm run test'
                }
            }
        }
    }
}
