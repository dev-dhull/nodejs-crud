const http = require("http");

const hostname = "localhost";
const port = 3000;
const fs = require('fs');

const server = http
  .createServer((req, res) => {
    fs.readFile('home.js', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
  })
  .listen(3000);
