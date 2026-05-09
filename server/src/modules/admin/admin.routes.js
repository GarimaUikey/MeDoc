const express = require("express");
const authMiddleware = require("../../middleware/auth.middleware");
const router = express.Router();

const {

  loginAdmin,
  getDashboardStats,
  getAllAppointments,
  deleteAppointment,
  getAllUsers,
  deleteUser,
  getAllOrders,
  updateOrderStatus

} = require("./admin.controller");

router.post(

  "/login",

  loginAdmin

);

router.get(

  "/dashboard-stats",

  authMiddleware(["admin"]),

  getDashboardStats

);
router.get(

  "/appointments",

  authMiddleware(["admin"]),

  getAllAppointments

);

router.delete(

  "/appointment/:appointmentId",

  authMiddleware(["admin"]),

  deleteAppointment

);
router.get(

  "/users",

  authMiddleware(["admin"]),

  getAllUsers

);

router.delete(

  "/user/:userId",

  authMiddleware(["admin"]),

  deleteUser

);
// GET ALL ORDERS

router.get(

  "/orders",

  authMiddleware(["admin"]),

  getAllOrders

);


// UPDATE ORDER STATUS

router.put(

  "/order-status/:orderId",

  authMiddleware(["admin"]),

  updateOrderStatus

);
module.exports = router;