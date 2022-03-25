# Description
Learn happy automation testing with cypress and Beni Dhomi

Download the CheatSheet pdf here: https://github.com/dhomi/cypress-testing/raw/main/CypressCheatsheet-v3.2.pdf


## Installation
- 1 The NodeJs must first be installed in Windows: https://nodejs.org/en/download/    
    Download and install it, choose to 'Install Tools' as well.
    - You can test if you have installed Node and npm correctly by typing command (cmd.exe in windows, or terminal/shell in mac/linux):
        - ```node -v```
        - ```npm -v```
- 2 Get the repository to your desired folder
    - by downloading the zip file and unzippint it: https://github.com/dhomi/cypress-testing/archive/refs/heads/main.zip
    - bt command line:
    ```git clone https://github.com/dhomi/cypress-testing.git```
- 3 go to the folder just created: 
    - ```cd cypress-testing```
- 4 Installing all node modules:
    - ```npm install```

## Develop
Edit your tests in the cypress/integration folder. You can choose for javascript filename.js or typescript filename.ts as extension. Both will work fine

## GUI Interface
- 5 Where you unzipped the repository/or cloned it, cd to it in command line and type:
    - ```npm run e2e:gui```
- intelliJ users: open the ```package.json``` file, then click the ```play``` button left of the e2e:gui (thats line number: 13)

---
## For future use and to help you with Jenkins/CI command
### cli interface: it runs all tests in command line
- for usage in Jenkins or other integration tools
    ```npm run e2e:headless```

