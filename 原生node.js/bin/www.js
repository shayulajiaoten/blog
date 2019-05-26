const http = require('http');

const PORT = 8000;
const serverHanld = require('../app');
const server = http.createServer(serverHanld);
server.listen(PORT);

console.log('http://127.0.0.1:8000'); 
