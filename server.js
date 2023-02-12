'use strict';
//Importing middlewares and dependencies
const express = require("express");
const dotenv = require('dotenv');
const morgan = require("morgan");
const path = require('path');
const connectDB = require('./server/database/connection.js');
const { connect } = require("mongoose");
const method_Override = require('method-override'); 


//Setting up express app
const app = express();


//Method Override , for eg:  www.xyz/id?_method=DELETE , method = "POST"
app.use(method_Override('_method'))


//log requests
app.use(morgan('tiny'));


//Using dotenv for hiding info and security purpose
//for eg: process.env.(ourVariables or functions created in config.env file)
dotenv.config({path: 'config.env'});
const port = process.env.port || 8080;


//mongodb Connections
connectDB();


//parse Request
app.use(express.urlencoded({extended : true}));


//set view engine
app.set("view engine", "ejs");
//Below step is for , if u are storing ejs files inside some
//other folder in views folder, then we are gonna link it using below code.
//app.set('views',path.resolve(__dirname,"views/someFileName"));
// Below method is used to link view folder universally when we are 
//calling from any directory
// -> app.set('views',path.join(__dirname,"/views"));


//Load assets like css and js etc
app.use('/css',express.static(path.resolve(__dirname, 'assets/css')));
//for linking with html :->
//<link rel = 'stylesheet' href = "css/style.css">
app.use('/js',express.static(path.resolve(__dirname, 'assets/js')));
//for linking with html :->
//<script src = "js/script.js"></script>
app.use('/img',express.static(path.resolve(__dirname, 'assets/img')));
//for linking with html :->
//<img src ="img/exampleImg1">


//load routers
app.use('/',require('./server/routes/router.js'));


//Starting/listening server
app.listen(port,()=>{
console.log(`Server is running on port http://localhost:${port}`);
});

