const express = require("express");

const router = express.Router();

const {
  bookAppointment,
  getUserAppointments
} = require("./appointment.controller");


// BOOK APPOINTMENT
router.post("/book", bookAppointment);


// GET USER APPOINTMENTS
router.get("/user/:userId", getUserAppointments);


module.exports = router;