const express = require("express");
const authMiddleware = require("../../middleware/auth.middleware");

const router = express.Router();

const {

  getAllDoctors,
  getDoctorById,
  loginDoctor,
  signupDoctor,
  updateAppointmentStatus,
  getDoctorAppointments

} = require("./doctor.controller");

// Doctor SignUP //
router.post("/signup", signupDoctor);

// DOCTOR LOGIN
router.post("/login", loginDoctor);

router.get(

  "/appointments",

  authMiddleware,
  getDoctorAppointments

);

router.put(

  "/appointment-status/:appointmentId",

  authMiddleware,

  updateAppointmentStatus

);


// GET ALL DOCTORS
router.get("/all", getAllDoctors);


// GET SINGLE DOCTOR
router.get("/:id", getDoctorById);


module.exports = router;