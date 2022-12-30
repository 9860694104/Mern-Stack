const http = require('http');
const createFile = require("./createFile");
const server = http.createServer(function (request , response){
    //request http request object
    //response http response object
    console.log("Request : " , request.method);
    console.log("URL : " , request.url);

    if(request.url == "/writefile"){
            createFile("jasper.txt" , "Welcome to Jasper IT")
            .then(function(data){
                console.log("Success");
            })
                          .catch(function(err){
                console.log("Error in Writing a File");
            }) 
              response.end("Hello From the Server !!! ");
    } else {
            response.end("Invalid URL");
    }

    console.log("Client is Connected");

})

server.listen(8080 ,  function (err, done){
    console.log ("Server Listening at port : 8080");
})