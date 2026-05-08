const Order = require("../../models/order.model");


// PLACE ORDER
const placeOrder = async (req, res) => {

  try {

    const {

      items,
      totalAmount,
      deliveryAddress

    } = req.body;

    const order = await Order.create({

      user: req.user.id,
      items,
      totalAmount,
      deliveryAddress

    });

    res.status(201).json({

      success: true,
      message: "Order placed successfully",
      order

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};


// GET USER ORDERS
const getMyOrders = async (req, res) => {

  try {

    const orders = await Order.find({

      user: req.user.id

    })

    // .populate("items.medicine")

    .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,
      orders

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};


module.exports = {

  placeOrder,
  getMyOrders

};