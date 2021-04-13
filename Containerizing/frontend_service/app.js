const express = require('express');
const path = require('path');
const passport = require('passport');
// const cors = require("cors");

// const bodyParser = require("body-parser"); // commented out since we using app.use(express.json()); // app.use(express.urlencoded({extended: true}));

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// Create the Express application
var app = express();


// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(function(error, req, res, next){
	console.log('REQUEST URL IS BELOW')
	console.log(req.originalUrl)
});

// LOAD FRONTEND FOR ALL REQUESTS OTHER THAN BACKEND ROUTER, IE FOR REACT-ROUTER-DOM
app.use(express.static(path.join(__dirname, 'build')));



const env = require("dotenv").config({ path: "./.env" });

module.exports = app;