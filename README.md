# reactNodePlayers

# Installation
- We will need to have babel, ejs, express, react and react-router installed:
$ npm install --save babel-cli@6.11.x babel-core@6.13.x  \
  babel-preset-es2015@6.13.x babel-preset-react@6.11.x ejs@2.5.x \
  express@4.14.x react@15.3.x react-dom@15.3.x react-router@2.6.x

- We will also need to install Webpack(with its Babel loader extension) and http-server as a development dependencies:
$ npm install --save-dev webpack@1.13.x babel-loader@6.2.x http-server@0.9.x

# Deployment
- Now we are ready to generate our bundle file, you just need to run:
$ NODE_ENV=production node_modules/.bin/webpack -p

- We are finally ready to play with the first version of our app!:
$ node_modules/.bin/http-server src/static