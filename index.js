const http = require("http");
const hostname = "localhost";
const port = 8080;
const fs = require("fs");

const header = fs.readFileSync("resources/layouts/header.html", "utf-8");
const home = fs.readFileSync("home.html", "utf-8");

const server = http
  .createServer((req, res) => {
    
    switch (req.url) {
      case "/":
        res.setHeader("Content-Type", "text/html");
        res.end(header);
        break;
      case "/form":
        res.setHeader("Content-Type", "text/html");
        res.end(home);
        break;
      default:
        res.writeHead(404);
        res.end();
    }
  })
  .listen(8080);
