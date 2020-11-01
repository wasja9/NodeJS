
const http = require('http');
 
module.exports.x = "Vasya";
module.exports.f1 = function() {
    return 100;
};
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});