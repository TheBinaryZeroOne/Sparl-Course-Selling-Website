const express = require("express");
const router = express.Router();
const {
  getPayment,
  checkout,
  paymentVerification,
} = require("../controllers/order");

router.get("/", getPayment);
router.post("/checkout", checkout);
router.post("/paymentVerification", paymentVerification);

module.exports = router;
