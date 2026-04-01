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
    select: false   // 🔐 security
  },
  phone: {
    type: String
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  address: [
    {
      street: String,
      city: String,
      state: String,
      pincode: String
    }
  ],
  isVerified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);