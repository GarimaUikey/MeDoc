const Appointment = require("../../models/appointment.model");


// BOOK APPOINTMENT
exports.bookAppointment = async (req, res) => {

  try {

    const {
      userId,
      doctorId,
      slotDate,
      slotTime,
      amount
    } = req.body;

    const appointment = await Appointment.create({

      userId,
      doctorId,
      slotDate,
      slotTime,
      amount

    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      appointment
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};