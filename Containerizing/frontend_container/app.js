const express = require('express');
const path = require('path');
const passport = require('passport');
const cors = require("cors");

require('dotenv').config();

// Create the Express application
var app = express();

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));


/**
 * -------------- INCLUDING REACT FRONTEND ----------------
 */
// LOAD FRONTEND FOR ALL REQUESTS OTHER THAN BACKEND ROUTER, IE FOR REACT-ROUTER-DOM
app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function(req, res){
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



module.exports = app;