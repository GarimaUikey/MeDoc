// medicine.model.js
const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  description: String,
  category: {
    type: String,
    enum: ["tablet", "syrup", "injection", "other"]
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  manufacturer: String,
  expiryDate: Date,
  requiresPrescription: {
    type: Boolean,
    default: false
  },
  image: String
}, { timestamps: true });

module.exports = mongoose.model("Medicine", medicineSchema);