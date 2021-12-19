const express = require("express");
const router = express.Router();
const user = require("../models/user.js")
const UsersController = require("../controllers/users");

router.route("/")
  .get(UsersController.find)
  
 
// router.route("/:servicesId")
//   .get(servicesController.find_One) 
//   .put(servicesController.update_One) 
//   .delete(servicesController.remove_One)  

module.exports = router;
