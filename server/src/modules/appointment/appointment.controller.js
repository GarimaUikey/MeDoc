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