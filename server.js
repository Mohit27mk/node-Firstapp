const http=require('http');

const routes=require('./routes');

// function rqListner(req,res){

// }

const server=http.createServer(routes.handler);

server.listen(4000);