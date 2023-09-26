const asyncHandle = require("express-async-handler");
const Order = require("../models/orderModel");
const getOrder = asyncHandle(async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching orders" });
  }
});
const createOrder = asyncHandle(async (req, res) => {
    try {
      const newOrder = new Order(req.body);
      await newOrder.save();
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ error: "Error creating order" });
    }
  });
const updateOrder = asyncHandle( async (req, res) => {
    const { orderId } = req.params;
    try {
      const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, {
        new: true,
      });
      res.json(updatedOrder);
    } catch (error) {
      res.status(400).json({ error: "Error updating order" });
    }
  });
const removeOrder = asyncHandle(async (req, res) => {
    const { orderId } = req.params;
    try {
      await Order.findByIdAndRemove(orderId);
      res.json({ message: "Order deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: "Error deleting order" });
    }
  });

module.exports = {
  getOrder,
  createOrder,
  updateOrder,
  removeOrder,
};
