import expAsyncHandler from "express-async-handler";
import Order from "../model/orderModel.js";

//@desc: create new order
//@route: GET /api/orders
//@access: private
const addOrderItems = expAsyncHandler(async (req, res) => {
  const {
    orderItem,
    shippingAddress,
    paymentMethod,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.lengh === 0) {
    res.status(400);
    throw new Error("No order item");
    return;
  } else {
    const order = new Order({
      user: req.user_id,
      orderItem,
      shippingAddress,
      paymentMethod,
      itemPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const newOrder = await order.save();
    res.status(201).json(newOrder);
  }
});
export { addOrderItems };
