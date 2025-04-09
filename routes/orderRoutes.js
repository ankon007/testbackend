const express = require("express");
const {
    getorders,
    singleorder,
    createsingleorder,
    updatesingleorder,
    deletesingleorder,
    verifyToken,
    getUserOrders,
} = require("../controllers/order.controler");

const router = express.Router();

// Protect all routes with verifyToken middleware
router.use(verifyToken);

router.get("/", getorders);
router.get("/:order_id", singleorder);
router.post("/", createsingleorder);
router.put("/:order_id", updatesingleorder);
router.delete("/:order_id", deletesingleorder);

// New route to fetch orders for the logged-in user
router.get("/user/orders", getUserOrders);

module.exports = router;
