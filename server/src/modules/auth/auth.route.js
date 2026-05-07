const express = require("express");

const router = express.Router();

const authMiddleware = require("../../middleware/auth.middleware");

const {

  signup,
  login,
  updateProfile

} = require("./auth.controller");

router.post("/signup", signup);

router.post("/login", login);

router.put(

  "/update-profile",

  authMiddleware(["user"]),

  updateProfile

);

module.exports = router;