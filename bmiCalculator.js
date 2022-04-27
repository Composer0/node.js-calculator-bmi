const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/bmiCalculator.html');
    // this redirects directly to your html file that is supposed to be used.
});

app.post('/', function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);


    var result = ((num1 / num2) / num2);

    res.send("Your BMI is "+ result)
    console.log(result);
})

app.post('/', function(req, res){

    var num3 = parseFloat(req.body.num3);
    var num4 = parseFloat(req.body.num4);

// parseFloat allows for decimals

    var result = ((num3 / num4) / num4)*703;

    res.send("Your BMI is "+ result)
    console.log(result);
})


app.listen(3000, function() {
    console.log("This is the 3000 port");
});

// at the moment the american works when metric is commented out. It does not work when metric is available for use. Metric works regardless.