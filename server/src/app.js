const express = require("express");
const cors = require("cors");

const authRoutes = require("./modules/auth/auth.route");
const userRoutes = require("./modules/user/user.route");
const doctorRoutes = require("./modules/doctor/doctor.route");
const appointmentRoutes = require("./modules/appointment/appointment.route");
const orderRoutes = require("./modules/order/order.route");
const adminRoutes = require("./modules/admin/admin.routes");

const app = express();


// MIDDLEWARES
app.use(express.json());
app.use(cors());


// ROUTES
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/order", orderRoutes);

app.get("/",(req,res)=>{
  res.send("Backend server is up and running");
});

module.exports = app;

