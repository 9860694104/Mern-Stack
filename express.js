const express = require("express");
const app = express(); // here , app is our intire application
const port = 9090;  
const  morgan =  require("morgan"); // here, morgan is a middleware to use this middleware we have to use (use) method
const createFile =  require("./createFile");

app.use(morgan("dev")); //This use method always takes middleware


app.get("/" , function(req,res){ //get is http verb
    console.log("Client Connected");
    res.json({msg : " Hello From Express !!!"}); 
})

app.get("/write/:filename/:content" , function(req,res){         // : this is used to make dynamic

     console.log("req.params : " , req.params);         //params is request a property .. teshma chai object aauxa
     createFile(req.params.filename , req.params.content)
       .then(function (data){
           res.json({msg : "File Created" , status : 200});
           console.log("File Created")
       })
       .catch(function (err){
           res.json({msg : "Error in : " , err})
       })
})


app.get("/newroute" , function(req,res){
    console.log("req.params" , req.params)
    console.log("req.query : " ,req.query);
    res.json(req.query);
})


app.listen(port , function(err, done){
    if(err){
        console.log("Server Listening Failed");
    } else {
        console .log ("Server Listening to port " , port);
        console.log("Press CTRL + C to exit !!!");
    }
})