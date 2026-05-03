const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

const authRoutes = require("./modules/auth/auth.route");
const appointmentRoutes = require("./modules/appointment/appointment.route");

app.use("/api/auth", authRoutes);
app.use("/api/appointment", appointmentRoutes);

module.exports = app;





module.exports = app;