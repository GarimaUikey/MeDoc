const express = require("express");

const router = express.Router();

const {
  bookAppointment
} = require("./appointment.controller");


// BOOK APPOINTMENT
router.post("/book", bookAppointment);


module.exports = router;