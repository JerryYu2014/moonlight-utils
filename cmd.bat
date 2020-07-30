
REM npm 模块初始化及发布
npm init
npm adduser --registry=https://registry.npmjs.org/
npm whoami --registry=https://registry.npmjs.org/
npm publish --registry=https://registry.npmjs.org/

npm i typescript -D

.\node_modules\.bin\tsc --init

npm install --save-dev webpack
npm i webpack -D

npm install clipboard --save
npm i clipboard

REM Test
npm i mocha -D
npm i chai -D

REM Code coverage
npm i istanbul -D
npm i coveralls -D

npm install moonlight-utils --registry=https://registry.npm.taobao.org

npm i moonlight-utils --registry=https://registry.npmjs.org/