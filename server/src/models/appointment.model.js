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
consultationType: {

  type: String,

  enum: ["Physical", "Live"],

  default: "Physical"

},

meetingLink: {

  type: String,

  default: ""

},
  amount: {
    type: Number,
    required: true
  },

  status: {

    type: String,

    enum: [

      "Pending",
      "Approved",
      "Completed",
      "Rejected"

    ],

    default: "Pending"

  },

  cancelled: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model(
  "Appointment",
  appointmentSchema
);