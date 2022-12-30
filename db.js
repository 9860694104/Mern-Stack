const mongoose = require("mongoose");
const config = require("./config");
mongoose.set('strictQuery', true);

mongoose.connect(config.dbName.mongodbUrl, function (err) {
    if (err) {
        console.log("Database Connection Failed!!!");
    } else {
        console.log("Database Connection Successful!!!");
    }
})