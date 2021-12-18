const express = require("express");
const router = express.Router();

const editprofileController = require("../controllers/users");

router.route("/editprofile")
  .get(editprofileController.find_All)
router.post("/editprofile", editprofileController.update_One);
router
.route("editprofile/:userId")
  .get(editprofileController.find_One) 
  .put(editprofileController.update_One) 
  .delete(editprofileController.remove_One)  

module.exports = router;