const express = require("express");

const router = express.Router();

const {

  loginAdmin

} = require("./admin.controller");

router.post(

  "/login",

  loginAdmin

);

module.exports = router;