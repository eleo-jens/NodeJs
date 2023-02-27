// utilise le package http
let http = require('http');

// je crée un serveur http: la fonction newClientCallback sera appelée
let httpServer = http.createServer(newClientCallback);

// écoute sur le port 8000
httpServer.listen(8000);

// Quand un nouveau client se connecte, cette fonction callback sera lancée
function newClientCallback(request, response){
    console.log(request.rawHeaders); 
    // instruction end pour terminer la connection
    response.end("Hello World"); 
}

