const config = require('./src/config/config');
const app = require('./src/config/express')();
// const fs = require("fs");
// const https = require('https');
const http = require('http');
//
// var options = {
//     key: fs.readFileSync('./privatekey.pem'),
//     cert: fs.readFileSync('./certificate.pem')
// };
console.log('listen at'+config.port);

http.createServer(app).listen(config.port);
// https.createServer(options, app).listen(443);

// app.listen(config.port);
