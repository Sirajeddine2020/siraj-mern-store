const http = require('http');
const app = require('./app');
const port = process.env.PORT || 2019;

const server = http.createServer(app);

server.listen(port);
console.log(`🚀 api running on PORT ${port} `);