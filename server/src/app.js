const express = require("express");
const cors = require("cors");
const userRoutes = require("./modules/user/user.route");
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);

const authRoutes = require("./modules/auth/auth.route");
const appointmentRoutes = require("./modules/appointment/appointment.route");

app.use("/api/auth", authRoutes);
app.use("/api/appointment", appointmentRoutes);

module.exports = app;





module.exports = app;