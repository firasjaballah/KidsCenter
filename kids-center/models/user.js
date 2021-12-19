var mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  category: { type: String },
  fullname: { type: String },
  username: { type: String },
  email   : { type: String },
  password: { type: String },
  adress : { type: String },
  city    : { type: String },
  specialty: { type: String, default : "" },
  phone   : { type: String, default : "" },
  connect : { type: Boolean, default: false },
  user_img: { type: String, default: "https://www.bootdey.com/img/Content/avatar/avatar7.png" },
},{ timestamps: true });





var User = mongoose.model('User', userSchema);

//if you didnt use this delete it
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

