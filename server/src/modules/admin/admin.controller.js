const Admin = require("../../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Doctor = require("../../models/doctor.model");
const User = require("../../models/user.model");
const Appointment = require("../../models/appointment.model");
const Order = require("../../models/order.model");

// ADMIN LOGIN
exports.loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({

      email

    }).select("+password");

    if (!admin) {

      return res.status(400).json({

        success: false,
        message: "Admin not found"

      });

    }

    const isMatch = await bcrypt.compare(

      password,
      admin.password

    );

    if (!isMatch) {

      return res.status(400).json({

        success: false,
        message: "Invalid credentials"

      });

    }

    const token = jwt.sign(

      {
        id: admin._id,
        role: "admin"
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );

    admin.password = undefined;

    res.status(200).json({

      success: true,
      token,
      admin

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};

// ADMIN DASHBOARD STATS
exports.getDashboardStats = async (req, res) => {

  try {

    const totalDoctors = await Doctor.countDocuments();

    const totalUsers = await User.countDocuments();

    const totalAppointments = await Appointment.countDocuments();

    let totalOrders = 0;

    // Safe check if order model exists
    if (Order) {

      totalOrders = await Order.countDocuments();

    }

    res.status(200).json({

      success: true,

      stats: {

        totalDoctors,
        totalUsers,
        totalAppointments,
        totalOrders

      }

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};
// GET ALL APPOINTMENTS
exports.getAllAppointments = async (req, res) => {

  try {

    const appointments = await Appointment.find()

      .populate("userId")

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
// DELETE APPOINTMENT
exports.deleteAppointment = async (req, res) => {

  try {

    const { appointmentId } = req.params;

    await Appointment.findByIdAndDelete(

      appointmentId

    );

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

// GET ALL USERS
exports.getAllUsers = async (req, res) => {

  try {

    const users = await User.find()

      .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,

      users

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
// DELETE USER
exports.deleteUser = async (req, res) => {

  try {

    const { userId } = req.params;

    await User.findByIdAndDelete(

      userId

    );

    res.status(200).json({

      success: true,

      message: "User deleted successfully"

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
// GET ALL ORDERS

exports.getAllOrders = async (req, res) => {

  try {

    const orders = await Order.find()

      .populate("user")

      .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,
      orders

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};


// UPDATE ORDER STATUS

exports.updateOrderStatus = async (req, res) => {

  try {

    const { orderId } = req.params;

    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(

      orderId,

      {
        status
      },

      {
        returnDocument: 'after'
      }

    );

    res.status(200).json({

      success: true,
      message: "Order status updated",
      order

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};