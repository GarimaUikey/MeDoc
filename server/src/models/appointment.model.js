// appointment.model.js
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },
  date: Date,
  time: String,
  status: {
    type: String,
    enum: ["booked", "completed", "cancelled"],
    default: "booked"
  }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);