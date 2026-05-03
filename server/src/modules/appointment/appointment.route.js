const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/auth.middleware");
const Appointment = require("../../models/appointment.model");

// BOOK APPOINTMENT (REAL)
router.post("/book", authMiddleware, async (req, res) => {
  try {
    const { doctorId, date, time } = req.body;

    // validation
    if (!doctorId || !date || !time) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // create appointment
    const appointment = await Appointment.create({
      user: req.user.id,
      doctor: doctorId,
      date,
      time
      // status automatically "booked"
    });

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;