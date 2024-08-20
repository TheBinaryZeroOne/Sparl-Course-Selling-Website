const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  Course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courses",
  },
  OrderDate: {
    type: Date,
    default: Date.now,
  },
  totalPrice: Number,
  razorpay_payment_id: {
    type: String,
    require: true,
  },
  razorpay_order_id: {
    type: String,
    require: true,
  },
  razorpay_signature: {
    type: String,
    require: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
