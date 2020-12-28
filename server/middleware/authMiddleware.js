import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import expAsyncHandler from "express-async-handler";

const secured = expAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("token failed, not authorized");
    }
  } else if (!token) {
    res.status(401);
    throw new Error("token not found");
  }
});
export { secured };
