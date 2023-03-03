const express = require('express');
const app = express();



app.get('/change20dollars', function(request, response){

    response.setHeader('Content-Type', 'text/html'); 

    let exchangeRate = 0.94;
    let amount = 20;
    let res = Math.Round(amount * exchangeRate * 100)/100;
    response.send(`20 dollars = ${res} euros`);
});

app.listen(8000, function(){
    console.log('Listening on port 8000');
})