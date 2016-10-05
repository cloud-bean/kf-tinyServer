const config = require('./src/config/config');
const app = require('./src/config/express')();
console.log('listen at'+config.port);
app.listen(config.port);
