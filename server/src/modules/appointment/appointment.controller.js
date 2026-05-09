const Appointment = require("../../models/appointment.model");
const Doctor = require("../../models/doctor.model");

// BOOK APPOINTMENT
exports.bookAppointment = async (req, res) => {

    try {

        const {
            userId,
            doctorId,
            slotDate,
            slotTime,
            amount,
            consultationType
        } = req.body;
        
        // doctor availablity
        const doctor = await Doctor.findById(

            doctorId

        );

        if (!doctor.available) {

            return res.status(400).json({

                success: false,

                message: "Doctor is currently unavailable"

            });

        }


        // CHECK IF SLOT ALREADY BOOKED
        const existingAppointment = await Appointment.findOne({

            doctorId,
            slotDate,
            slotTime,
            cancelled: false

        });

        if (existingAppointment) {

            return res.status(400).json({

                success: false,
                message: "Slot already booked"

            });

        }


        // CREATE APPOINTMENT
        const appointment = await Appointment.create({

            userId,
            doctorId,
            slotDate,
            slotTime,
            amount,
            consultationType

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

exports.getUserAppointments = async (req, res) => {

    try {

        const { userId } = req.params;

        const appointments = await Appointment.find({ userId })

            .populate("doctorId")

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

exports.cancelAppointment = async (req, res) => {

    try {

        const { appointmentId } = req.params;

        await Appointment.findByIdAndDelete(appointmentId);

        res.status(200).json({

            success: true,
            message: "Appointment deleted successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};