/**
 * Module dependencies
 */
var express = require('express');
var bodyParser = require('body-parser');

// create new express 'app'
var app = express();

// get files in /public
app.use(express.static('./public'));
app.use(express.static('./bower_components/bower-angularjs'));

//set-up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// export the app
module.exports = app;
