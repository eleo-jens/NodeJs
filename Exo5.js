let http = require('http');

let httpServer = http.createServer(newClientCallback);

httpServer.listen(8000);

function newClientCallback(request, response){
    let headerToClient = {
        'content-type' : 'text/html; charset=utf-8'
    }
    response.writeHead(200, headerToClient);
    
    let now = new Date();
    let hours = now.getHours().toString().padStart(2,'0');
    let minutes = now.getMinutes().toString().padStart(2,'0');
    let seconds = (now.getSeconds() < 10) ? '0'+ now.getSeconds().toString() : now.getSeconds(); 
    let date = now.getDate().toString().padStart(2,'0');
    let month = (now.getMonth()+1).toString().padStart(2, '0');
    console.log(seconds);
    response.end(`<strong>Nous sommes le ${date}-${month}-${now.getFullYear()}. 
                 Il est: ${hours}:${minutes}:${seconds}</strong>`)         
}
