const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true
  },

  slotDate: {
    type: String,
    required: true
  },

  slotTime: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    default: "Pending"
  },

  cancelled: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);