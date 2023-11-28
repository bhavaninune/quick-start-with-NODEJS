const http = require('http');
const routes=require('./routes');
//const fs=require('fs');
console.log(routes.someText);
const server = http.createServer(routes.handler);
  //  const url = req.url;
    //const method=req.method;

server.listen(3000);

