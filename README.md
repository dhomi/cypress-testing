# Description
Learn happy automation testing with cypress and Beni Dhomi

## Installation
- The NodeJs must first be installed in Windows: https://nodejs.org/en/download/    
    Download and install it, choose to 'Install Tools' as well.
- You can test if you have installed Node and npm correctly by typing command (cmd.exe in windows, or terminal/shell in mac/linux):
        node -v
        npm -v
- Get the git repository to your development folder with commandline:
    git clone https://github.com/dhomi/cypress-testing.git
- go to the folder just created: 
    cd cypress-testing
- Installing all node modules:
    npm install

## Develop
Edit your tests in the cypress/integration folder. You can choose for javascript filename.js or typescript filename.ts as extension. Both will work fine

## GUI Interface
    npm run e2e:gui

## cli interface: it runs all tests in command line and passes status at the end
    npm run e2e:headless

