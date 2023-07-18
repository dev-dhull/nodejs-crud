const express = require("express");
const app = express();
const port = 8080;
var formidable = require("formidable");
const fs = require('fs');
const allproducts = fs.readFileSync('./allproducts.html', 'utf-8');

app.get("/", (req, res) => {
  res.sendFile("home.html", { root: __dirname });
  console.log(res);
});
app.post("/", (req, res) => {
    res.sendFile("home.html", { root: __dirname });
    console.log(req);
  });

app.get('/products', (req, res) => {
    // fs.readFile('package.json', (req, res) => {
        res.end(allproducts);
    // })
})

app.listen(port);
