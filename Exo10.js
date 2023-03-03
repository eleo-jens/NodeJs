const express = require('express'); 
const app = express();
app.listen(8000);

app.get('/change', function(request, response){

    response.setHeader('Content-Type', 'text/html'); 
    let amount; 
    if (request.query.amount == undefined) amount = 100; 
    else amount = request.query.amount; 
    let montantenEuro = Math.round(amount * 0.94 * 100)/100;
    let montantenDollar = Math.round(amount * 1.06 * 100)/100;
    if (request.query.currency == "dollar"){
        response.send(`${amount} dollars = ${montantenEuro} euros`);
    }
    else if (request.query.currency == "euro"){
        response.send(`${amount} euros = ${montantenDollar} dollars`)
    }
});