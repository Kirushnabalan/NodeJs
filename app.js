const http = require('http')


const server=http.createServer( (request,responce) =>{
    request.setHeader('Content-type','text/html')
});
server.listen(8000);