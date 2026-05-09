const Admin = require("../../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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