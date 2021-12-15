var express = require("express");
var app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/gfp", { useMongoClient: true });
app.listen(5000, function () {
    console.log(`listening on port http://localhost:5000 !`);
});