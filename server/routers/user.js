var express = require('express');
var {selectAll,User} = require('../../models/user.js')

var app = express();


router.route('/user')
  .get(function(req, res) {
    selectAll(function(err, data) {
      if(err) {
        res.sendStatus(500);
      } else {
        console.log(data);
        res.json('success',data);
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
       "email":email,}
   ).catch(err=>{res.send('err',err)})
})
  
  
module.exports = app;
