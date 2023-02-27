let http = require('http');

let httpServer = http.createServer(newClientCallback);

httpServer.listen(8000);

function newClientCallback(request, response){
    let headerToClient = {
        'content-type' : 'application/json'
    }
    response.writeHead(200, headerToClient);
    
    let now = new Date();
    
    // let currentHourObject = {
    //     'hours' : now.getHours().toString().padStart(2,'0'), 
    //     'hours' : now.getHours().toString().padStart(2,'0'),
    //     'minutes' : now.getMinutes().toString().padStart(2,'0'),
    //     'seconds' : (now.getSeconds() < 10) ? '0'+ now.getSeconds().toString() : now.getSeconds(),
    //     'date' : now.getDate().toString().padStart(2,'0'),
    //     'month' : (now.getMonth()+1).toString().padStart(2, '0'),
    //     'year': now.getFullYear()
    // };

    let currentHourObject = new Object();
    currentHourObject.hours = now.getHours().toString().padStart(2,'0'); 
    currentHourObject.hours = now.getHours().toString().padStart(2,'0');
    currentHourObject.minutes = now.getMinutes().toString().padStart(2,'0');
    currentHourObject.seconds = (now.getSeconds() < 10) ? '0'+ now.getSeconds().toString() : now.getSeconds();
    currentHourObject.date = now.getDate().toString().padStart(2,'0');
    currentHourObject.month = (now.getMonth()+1).toString().padStart(2, '0');
    currentHourObject.year = now.getFullYear();
    response.end(JSON.stringify(currentHourObject));         
}
