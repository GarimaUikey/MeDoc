const express = require("express");
const authMiddleware = require("../../middleware/auth.middleware");

const router = express.Router();

const {

  getAllDoctors,
  getDoctorById,
  loginDoctor,
  getDoctorAppointments

} = require("./doctor.controller");


// DOCTOR LOGIN
router.post("/login", loginDoctor);

router.get(

  "/appointments",

  authMiddleware,
  getDoctorAppointments

);


// GET ALL DOCTORS
router.get("/all", getAllDoctors);


// GET SINGLE DOCTOR
router.get("/:id", getDoctorById);


module.exports = router;