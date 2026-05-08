const express = require("express");

const router = express.Router();

const authMiddleware = require("../../middleware/auth.middleware");

const {

  placeOrder,
  getMyOrders

} = require("./order.controller");


// PLACE ORDER
router.post(

  "/place",
  authMiddleware(["user"]),
  placeOrder

);


// GET MY ORDERS
router.get(

  "/my-orders",
  authMiddleware(["user"]),
  getMyOrders

);

module.exports = router;