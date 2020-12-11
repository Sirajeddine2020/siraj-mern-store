const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { updateOrder } = require("../controller/order.admin");
const router = express.Router();

router.post(`/order/update`, requireSignin, adminMiddleware, updateOrder);

module.exports = router;
