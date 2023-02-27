const express = require('express');
const app = express();

app.listen(8000, function(){
    console.log('Listening on port 8000');
})

//gestion de la route
// autre façon que le package http
app.get('/', function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.send('<strong>Hello World</strong>');
   });

app.get('/whattimeisit', function(request, response){
    response.setHeader('Content-Type', 'application/json'); 
    let now = new Date();
    let currentHourObject = new Object();
    currentHourObject.hours = now.getHours().toString().padStart(2,'0'); 
    currentHourObject.hours = now.getHours().toString().padStart(2,'0');
    currentHourObject.minutes = now.getMinutes().toString().padStart(2,'0');
    currentHourObject.seconds = (now.getSeconds() < 10) ? '0'+ now.getSeconds().toString() : now.getSeconds();
    currentHourObject.date = now.getDate().toString().padStart(2,'0');
    currentHourObject.month = (now.getMonth()+1).toString().padStart(2, '0');
    currentHourObject.year = now.getFullYear();
    response.end(JSON.stringify(currentHourObject));  
});