const express = require("express");
const router = express.Router();
const Service = require("../models/services.js")
const servicesController = require("../controllers/services");

router.route("/")
  .get(servicesController.find)
  
 
// router.route("/:servicesId")
//   .get(servicesController.find_One) 
//   .put(servicesController.update_One) 
//   .delete(servicesController.remove_One)  

module.exports = router;
