
var express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./routers/user.js');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();

mongoose.connect('mongodb://localhost/user').then((data)=> console.log("mongoose connected"));

app.use(bodyParser.json());
app.use(cors());

// app.use(express.static(__dirname + '/../react-client/dist'));


app.use('/', userRouter);

app.listen(8000, function() {
  console.log('listening on port 8000');
});

