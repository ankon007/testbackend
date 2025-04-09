const express = require('express');
const router = express.Router();

const {
    getorders,
    singleorder,
    createsingleorder,
    updatesingleorder,
    deletesingleorder,
    verifyToken // Import the middleware
} = require('../controllers/order.controler');

// Apply verifyToken middleware to protect the routes
router.get('/', verifyToken, getorders);
router.get('/:order_id', verifyToken, singleorder);
router.post('/', verifyToken, createsingleorder);
router.put('/:order_id', verifyToken, updatesingleorder);
router.delete('/:order_id', verifyToken, deletesingleorder);
module.exports = router;