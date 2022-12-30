const express = require("express");
const app = express(); 
const port = 9009;  
const  morgan =  require("morgan"); 

app.use(morgan("dev")); 

app.use(function (req ,res, next){
    console.log("I am kalanki ko Middleware");
    console.log("I am checking liscene and bluebook...");
   if(false){
        res.send("Blocked By Middleware !!!")
   } else {
    next();
   }
});

app.use(function (req ,res, next){
    console.log("I am  ko ekantakunaMiddleware");
    console.log("I am checking Mapase...");
   if(false){
        res.send("Blocked By Middleware !!!")
   } else {
    next();
   }
});


app.get("/ekantakuna", function(req,res){
    console.log("I am going to ekantakuna")
    res.json({msg : "I am going to ekantakuna "})
})

app.get("/satdobato", function(req,res){
    console.log("I am going to satdobato")
    res.json({msg : "I am going to satdobato "})
})


app.listen(port , function(err, done){
    if(err){
        console.log("Server Listening Failed");
    } else {
        console .log ("Server Listening to port " , port);
        console.log("Press CTRL + C to exit !!!");
    }
})