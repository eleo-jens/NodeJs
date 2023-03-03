const express = require('express');
const app = express();
app.listen(8000);

app.use('/', express.static(__dirname + "/httproot"));

app.get('/change', function(request, response){

    response.setHeader("Content-Type","text/html");

    let amount; 
    if (request.query.amount == undefined) amount = 100; 
    else amount = request.query.amount; 

    console.log(request.query.currencyStart);
    console.log(request.query.currencyEnd);

    if (request.query.currencyStart == "dollar"){
        let montantenEuro = Math.round(amount * 0.94 * 100)/100;
        response.send(`${amount} dollars = ${montantenEuro} euros`);
    }
    else if (request.query.currencyStart == "euro"){
        let montantenDollar = Math.round(amount * 1.06 * 100)/100;
        response.send(`${amount} euros = ${montantenDollar} dollars`)
    }

});
