var express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./routers/user.js');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/user');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));


app.use('/user', userRouter);

app.listen(8000, function() {
  console.log('listening on port 8000');
});
