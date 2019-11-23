var express = require('express');
var app = express();

var firebase_controller = require('./controllers/firebase_cloud');
var port = process.env.PORT || 3000;

firebase_controller(app);

app.listen(port);