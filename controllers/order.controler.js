const jwt = require("jsonwebtoken");
const Order = require('../models/order.model'); // Renamed from 'order' to 'Order'

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user info to the request
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
};

const getorders = async (req, res) => {
    try {
        const orders = await Order.find({}); // Updated to use 'Order'
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const singleorder = async (req, res) => {
    try {
        const { order_id } = req.params;
        const order = await Order.findById(order_id); // Updated to use 'Order'
        if (!order) {
            return res.status(404).json({ message: "No order found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createsingleorder = async (req, res) => {
    try {
        const order = await Order.create(req.body); // Updated to use 'Order'
        res.status(201).json({ order: order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatesingleorder = async (req, res) => {
    try {
        const { order_id } = req.params;
        const order = await Order.findByIdAndUpdate(order_id, req.body, { new: true }); // Updated to use 'Order'
        if (!order) {
            return res.status(404).json({ message: "No order found" });
        }
        res.status(200).json({ order: order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletesingleorder = async (req, res) => {
    try {
        const { order_id } = req.params;
        const order = await Order.findByIdAndDelete(order_id); // Updated to use 'Order'
        if (!order) {
            return res.status(404).json({ message: "No order found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// New function to fetch orders for the logged-in user
const getUserOrders = async (req, res) => {
    try {
        const userId = req.user.id; // Extract user ID from the verified token
        const userOrders = await Order.find({ userId }); // Updated to use 'Order'
        res.status(200).json(userOrders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getorders,
    singleorder,
    createsingleorder,
    updatesingleorder,
    deletesingleorder,
    verifyToken, // Export the middleware
    getUserOrders, // Export the new function
};
