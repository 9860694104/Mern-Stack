const exp = require("constants");
const { json } = require("express");
const express = require("express");
const app = express();
const cors = require("cors")
const config = require("./config");
const morgan = require("morgan");
const path = require("path");
const pug = require("pug");
require("./db");

app.use(cors());

//SetUp Template Engine
app.set("view engine", pug);
app.set("views", "templates");

//Third Party Middleware
app.use(morgan("dev"));

//Load API Router
const apiRouter = require("./routes/apiRoute");

//Use Inbuilt MiddleWares
app.use(express.static("files"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());//raw data herna lai jun chai postman ma hunxa
app.use("/file", express.static(path.join(__dirname, "files")));



//Use API Route
app.use("/api", apiRouter);


app.use("/", function (req, res, next) {

    res.render("index.pug", {})
})

app.use(function (req, res, next) {
    console.log("PAGE NOT FOUND");
    res.json({ msg: "PAGE NOT FOUND" })
})

//Error Handling MiddleWare
app.use(function (err, req, res, next) {
    console.log("Error is ; ", err);
    res.status(err.status || 400).json({
        msg: "ERROR Handling Middleware !! Something went Wrong",
        err: err
    })
})


app.listen(config.app.port, function (err, done) {
    if (err) {
        console.log("Server Listening Failed");
    } else {
        console.log("Server Listening to port ", config.app.port);
        console.log("Press CTRL + C to exit !!!");
    }
})

