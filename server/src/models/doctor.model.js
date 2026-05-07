// doctor.model.js
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  image: {
    type: String,
    default: ""
  },

  degree: {
    type: String,
    default: ""
  },

  about: {
    type: String,
    default: ""
  },

  address: {
    line1: {
      type: String,
      default: ""
    },

    line2: {
      type: String,
      default: ""
    }
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true,
    select: false
  },
  specialization: {
    type: String,
    index: true
  },
  available: {
    type: Boolean,
    default: true
  },
  experience: {
    type: Number,
    default: 0
  }, // years
  fees: {
    type: Number,
    default: 0
  },
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