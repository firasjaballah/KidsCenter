var express = require('express');
var {selectAll,User} = require('../../models/user.js');

var router = express.Router();

router.route('/user')
  .get(function(req, res) {
    selectAll(function(err, data) {
      if(err) {
        console.log("error user router : ", err);
      } else {
        // res.send('all users');
        res.send({data});
      }
    });
  });

router.route('/user/:id')
  .get(function(req, res) {
    findOne({id:req.params.id},function(err,data){    
      console.log({id:req.params.id})
      if(err){
        res.send('there is an err',err)
      }
      else{
        res.send('success',data)
      }
    })
  });

router.route('/user')
    .post(function(req, res) {
    console.log("request from angular");
    User.create(req.body)
    .then(function(){
        selectAll(function(err,data){
        if(err){
          console.log(err)
        }
        else{
          res.json(data)
        }
      })
    })
  });

router.route('/update')
.post(function(req,res){
  var {id,certificatePath,picturePath,email,password,phone,city,specialty,address,fullName}=req.body
  console.log(req.body)
  User.findByIdAndUpdate(id,
      {
        "fullName":fullName,
        "certificatePath":certificatePath,
        "picturePath":picturePath,
        "password":password,
        "city":city,
        "phone":phone,
        "specialty":specialty,
        "address":address,
        "email":email
        }
  ).catch(err=>{res.send('err',err)})
})

module.exports = router;
