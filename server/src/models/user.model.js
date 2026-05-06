// user.model.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false   // security
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  phone: {
    type: String,
    default: ""
  },

  gender: {
    type: String,
    default: ""
  },

  dob: {
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
  isVerified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);