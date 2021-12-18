const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    title:{ type: String },
    eventBy: { type: Object },
    location: { type: String },
    city: { type: String },
    contact: { type: String, default: "" },
    date: { type: String, default: "" },
    event_img: {
      type: String,
      default:
        " https://media.istockphoto.com/photos/group-of-kids-party-event-festive-celebration-picture-id699706592?b=1&k=20&m=699706592&s=170667a&w=0&h=90X9tlV_hX1io7mSj512hPEA99p6idmGn06pI2q0vo0=",
    },
    likes: { type: Number },
    comments:{default:[]},
    description:{ type: String, default: "" }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Event", eventSchema);
