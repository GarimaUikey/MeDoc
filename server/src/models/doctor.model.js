// doctor.model.js
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    index: true
  },
  experience: Number, // years
  fees: Number,
  hospital: String,
  availability: [
    {
      day: String,
      timeSlots: [String]
    }
  ],
  rating: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);