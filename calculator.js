//jshint esversion:6
const express = require("express");
 
const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", function(rep, res){
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(rep, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result= num1+num2;

    res.send("The result of calculation is:"+ result);
    res.send(String(result));
});

app.listen(3000, function(){
        console.log("Server is running on port 3000.");
});