const Doctor = require("../../models/doctor.model");


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