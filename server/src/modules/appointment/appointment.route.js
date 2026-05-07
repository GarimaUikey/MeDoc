const express = require("express");
const authMiddleware = require("../../middleware/auth.middleware");

const router = express.Router();

const {
  bookAppointment,
  getUserAppointments,
  cancelAppointment
} = require("./appointment.controller");


// BOOK APPOINTMENT
router.post(

  "/book",

  authMiddleware,

  bookAppointment

);


// GET USER APPOINTMENTS
router.get(

  "/user/:userId",

  authMiddleware,

  getUserAppointments

);

// Canecel Appointments // 
router.put(

  "/cancel/:appointmentId",

  authMiddleware,

  cancelAppointment

);


module.exports = router;