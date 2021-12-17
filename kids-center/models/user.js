var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  fullName:String,
  city:String,
  specialty:String,
  password:String,
  address:String,
  phone:Number,
  email:String,
  picturePath:String,
  certificatePath:String
});

var User = mongoose.model('User', userSchema);

var selectAll = function(callback) {
  User.find({}, function(err, users) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, users);
    }
  });
};

module.exports = {selectAll,User}

