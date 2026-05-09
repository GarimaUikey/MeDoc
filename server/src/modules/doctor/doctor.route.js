
const express = require("express");
const authMiddleware = require("../../middleware/auth.middleware");

const router = express.Router();

const {

  getAllDoctors,
  getDoctorById,
  loginDoctor,
  signupDoctor,
  updateAppointmentStatus,
  getDoctorAppointments,
  toggleAvailability,
  updateDoctorProfile,
  deleteDoctor,
  addMeetingLink

} = require("./doctor.controller");

// Doctor SignUP //
router.post("/signup", signupDoctor);

// DOCTOR LOGIN
router.post("/login", loginDoctor);

router.get(

  "/appointments",

  authMiddleware(["doctor"]),
  getDoctorAppointments

);

router.put(

  "/appointment-status/:appointmentId",

  authMiddleware(["doctor"]),

  updateAppointmentStatus

);

router.put(

  "/meeting-link/:appointmentId",

  authMiddleware(["doctor"]),

  addMeetingLink

);

router.put(

  "/toggle-availability",

  authMiddleware(["doctor"]),

  toggleAvailability

);


// GET ALL DOCTORS
router.get("/all", getAllDoctors);


// GET SINGLE DOCTOR
router.get("/:id", getDoctorById);

// Update Doctor Profile //
router.put(

  "/update-profile",

  authMiddleware(["doctor"]),

  updateDoctorProfile

);

router.delete(

  "/delete/:doctorId",

  authMiddleware(["admin"]),

  deleteDoctor

);
module.exports = router;