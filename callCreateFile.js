const createFile = require("./createFile");

createFile("saurav.js" , " Welcome to JS Class !!!")
.then(function(data){
    console.log("SuccessFully Created File" , data) ;
})
.catch(function(err){
    console.log("Error on  Creating File" , err)
})