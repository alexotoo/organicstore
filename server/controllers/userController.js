import expAsyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

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
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("invalide email or password");
  }
});

//@desc: Get user profile
//@route: GET /api/users/profile
//@access: private
const getUserProfile = expAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

//@desc: update user profile
//@route: PUT /api/users/profile
//@access: private
const updateUserProfile = expAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

//@desc: register a new user
//@route: POST /api/users
//@access: public
const registerUser = expAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const isRegistedUser = await User.findOne({ email });

  if (isRegistedUser) {
    res.status(400);
    throw new Error("user already registered");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("incorrect user data");
  }
});

export { authUser, getUserProfile, registerUser, updateUserProfile };
