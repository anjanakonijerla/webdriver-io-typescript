# webdriver-io-typescript

Used technologies: (Below needs to be installed if not done alreday)
- webdriver.io
- cucumberjs
- typescript
- Node
- Allure

## How to run
- check out the project
- import into Visal Studio or your preferred IDE
- open the terminal and execute below command

$  npx wdio run ./wdio.conf.ts; allure generate .\reports\allure-results --clean;  allure open;

Once above command is successful, you would see results in the form of allure reports


## Note
- Please provide unique email ids in all feature files.
- This framework can be extend to take inputs from external files.
- This application is tested in WINDOWS using Chromedriver.
