
const http = require('http');

const server = http.createServer((req, res) =>{
  if (req.url === "/"){
    var time = new Date();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.write(JSON.stringify(time));
    res.end(JSON.stringify(time));
  }
});

server.listen(8080);
console.log("ready on port 8080");
