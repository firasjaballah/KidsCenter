const Service = require("../models/services.js");

module.exports = {
     find_All: async (req, res, next) => {
          // get all the users
          try {
    console.log("query",req.query);               // the server will try the following
    console.log("params",req.params);
               const services = await Service
                    .find({})
                    // .populate(["parent", "provider"])
                    // .select('-password')

               res.status(200).json(services);
          } catch (error) {
               next(error);
          }
     }
    }