const express = require("express");

const router = express.Router();

const authMiddleware = require("../../middleware/auth.middleware");

const {
  updateProfile
} = require("./user.controller");


// UPDATE PROFILE
router.put(
  "/update",
  authMiddleware,
  updateProfile
);

module.exports = router;