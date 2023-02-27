let http = require('http'); 

let httpServer = http.createServer(newClientCallback);

httpServer.listen(8000);

function newClientCallback(request, response){
    console.log(request.headers.connection);
    let header = {
        'content-type': 'text/html'
    }
    response.writeHead(200, header);
    response.end('<strong>Hello World</strong>');
}