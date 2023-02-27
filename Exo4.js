let http = require('http'); 

let httpServer = http.createServer(newClientCallback);

httpServer.listen(8000);

function newClientCallback(request, response){
    let acceptLanguages = request.headers["accept-language"];
    let favoriteLanguage = acceptLanguages.substring(0,2);
    console.log(favoriteLanguage);
    let headerToSendToClient = {
        'content-type': 'text/html; charset=utf-8'
    }
    response.writeHead(200, headerToSendToClient);

    if (favoriteLanguage == "fr")
        response.end('<strong>Bonjour le Monde!</strong>');
    else if (favoriteLanguage == "es")
        response.end('<strong>Hola</strong>');
    else
        response.end('<strong>Hello World</strong>');
    
    const now = new Date();
    console.log(now);
}