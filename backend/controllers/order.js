const Order = require("../model/Order");
const Razorpay = require("razorpay");
const { options } = require("../routes/order");
const crypto = require("crypto");
const User = require("../model/User");

const getPayment = (req, res) => {
  res.send("This is get payment page");
};

const checkout = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RPAY_API_KEY,
      key_secret: process.env.RPAY_SECRET_KEY,
    });

    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    return res.json({
      success: true,
      order,
    });
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

const paymentVerification = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const { userId, courseId, totlaAmt } = req.query;

  console.log(
    `course id = ${courseId}, user id = ${userId}, totalamt = ${totlaAmt}`
  );

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RPAY_SECRET_KEY)
    .update(body.toString())
    .digest("hex");

  console.log("sig Recieved:", razorpay_signature);
  console.log("sig gen:", expectedSignature);

  const isAuth = razorpay_signature === expectedSignature;

  if (isAuth) {
    // database mein store krni hai details
    await Order.create({
      user: userId,
      Course: courseId,
      totalPrice: totlaAmt,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    });

    await User.findByIdAndUpdate(userId, { $push: { coursesOwned: courseId } });

    res.redirect(
      `http://localhost:5173/courses/paymentSuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

module.exports = { getPayment, checkout, paymentVerification };
