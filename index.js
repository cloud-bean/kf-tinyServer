const config = require('./src/config/config');
const app = require('./src/config/express')();
app.listen(config.port);
