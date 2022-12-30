const fs = require("fs");

function createFile(fileName , fileText) {
    return new Promise (function (resolve , reject){
        fs.writeFile(fileName , fileText , function (err , success){
            if(err){
                reject(err);
            } else {
                resolve(success);
            }
        });
    });
}

module.exports =  createFile;