const Events = require("../models/event");

module.exports = {
    find_All: async (req, res, next) => {
         try {
              
              const users = await Events
                   .find({})
                  

              res.status(200).json(events);
         } catch (error) {
              next(error);
         }
    },
    find_One: async (req, res, next) => {
         try {
            
              const eventsFound = await Events
                   .find(req.params.state)
                   

              res.status(200).json(eventsFound);
         } catch (error) {
              next(error);
         }
    },
    update_One: async (req, res, next) => {
         try {
           
              const event = await Events
                   .findByIdAndUpdate(req.params.eventId, req.body, { new: true })
                   
              res.status(200).json(event)
         } catch (error) {
              next(error);
         }
    },
    remove_One: async (req, res, next) => {
         try {
              
              const removedEvent = await Events
                   .findByIdAndRemove(req.params.EventId)
                   

              res.status(200).json(removedEvent)
         } catch (error) {
              next(error)
         }
    }
};