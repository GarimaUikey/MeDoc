const User = require("../../models/user.model");

exports.updateProfile = async (req, res) => {

  try {

    const userId = req.user.id;

    const {
      name,
      phone,
      gender,
      dob,
      address
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        name,
        phone,
        gender,
        dob,
        address
      },
      {
        returnDocument: 'after'
      }
    ).select("-password");

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};