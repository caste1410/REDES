
const http = require('http');




const server = http.createServer((req, res) =>{
  if (req.url === "/"){
    var time = new Date();
    res.write(JSON.stringify(time));
    res.end();
  }
});

server.listen(8080);
console.log("ready on port 8080");
