// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
// use this when we are passing data that comes from an HTML form.
// extended: true allows us to post nested objects.

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
// this is how you request files within the app/server. __dirname must be lowercased in order to work.

app.post('/', function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    // req.body allows num1 and num2 to be passed through into the function itself.

    var result = num1 + num2;

    res.send("The result of the calculation is "+ result)
})
// This creates a post that allows information to be visible at the sendFile location.


app.listen(3000, function() {
    console.log("This is the 3000 port");
});