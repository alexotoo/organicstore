import expAsyncHandler from "express-async-handler";
import User from "../model/userModel.js";

//@desc: Auth user & get token
//@route: POST /api/users/login
//@access: public
const authUser = expAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("invalide email or password");
  }
});
export { authUser };
