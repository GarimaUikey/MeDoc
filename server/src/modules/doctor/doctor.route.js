const express = require("express");

const router = express.Router();

const {
  getAllDoctors,
  getDoctorById
} = require("./doctor.controller");


// GET ALL DOCTORS
router.get("/all", getAllDoctors);


// GET SINGLE DOCTOR
router.get("/:id", getDoctorById);


module.exports = router;