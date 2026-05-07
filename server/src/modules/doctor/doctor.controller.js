const Appointment = require("../../models/appointment.model");
const Doctor = require("../../models/doctor.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.getDoctorById

// DOCTOR LOGIN
exports.loginDoctor = async (req, res) => {

  try {

    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ email })

      .select("+password");

    if (!doctor) {

      return res.status(400).json({

        success: false,
        message: "Doctor not found"

      });

    }

    const isMatch = await bcrypt.compare(

      password,
      doctor.password

    );

    if (!isMatch) {

      return res.status(400).json({

        success: false,
        message: "Invalid credentials"

      });

    }

    const token = jwt.sign(

      {
        id: doctor._id,
        role: "doctor"
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );

    doctor.password = undefined;

    res.status(200).json({

      success: true,
      token,
      doctor

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};
// GET DOCTOR APPOINTMENTS
exports.getDoctorAppointments = async (req, res) => {

  try {

    const doctorId = req.user.id;

    const appointments = await Appointment.find({

      doctorId

    })

      .populate("userId")

      .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,
      appointments

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};
// GET ALL DOCTORS
exports.getAllDoctors = async (req, res) => {

  try {

    const doctors = await Doctor.find();

    res.status(200).json({
      success: true,
      doctors
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};


// GET SINGLE DOCTOR
exports.getDoctorById = async (req, res) => {

  try {

    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {

      return res.status(404).json({
        success: false,
        message: "Doctor not found"
      });

    }

    res.status(200).json({
      success: true,
      doctor
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};