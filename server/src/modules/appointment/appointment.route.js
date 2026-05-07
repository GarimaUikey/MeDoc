const express = require("express");

const router = express.Router();

const {
  bookAppointment,
  getUserAppointments,
  cancelAppointment
} = require("./appointment.controller");


// BOOK APPOINTMENT
router.post("/book", bookAppointment);


// GET USER APPOINTMENTS
router.get("/user/:userId", getUserAppointments);

// Canecel Appointments // 
router.put("/cancel/:appointmentId", cancelAppointment);


module.exports = router;