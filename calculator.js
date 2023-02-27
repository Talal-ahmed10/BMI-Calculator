const express = require("express");
//body-parser allows us to have access of properties and variable so we can do our calculations
const bodyParser = require("body-parser");

const app = express();
//parsing data from index.html form
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//requesting the posted msgs 
//"/" is use for root directory which is index.html
app.post("/", function(req, res){
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);

var result = num1 + num2; 
    res.send("The result is : " + result);
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
    var y = req.body.height;
    var x = req.body.weight;

    var bodyMass = (x) / (y*y);

    res.send("Your BMI is: "+ bodyMass);
});

app.listen(3000, function(){
    console.log("Server Started on port: 3000");
});
