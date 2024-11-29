const http=require('http');


const server=http.createServer((req,res) =>{

    const url=req.url;
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<Html>');
        res.write('<Head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>');
        res.write('</Head>');
        res.write('</Html>');
        return res.end();
    }
        res.setHeader('Content-Type','text/html');
        res.write('<Html>');
        res.write('<Head>');
        res.write('<H1>ADA<h1>');
        res.write('</Head>');
        res.write('</Html>');
        res.end();
   
    
});

server.listen(8000);