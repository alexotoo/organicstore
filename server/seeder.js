import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import products from "./data/products.js";
import users from "./data/users.js";
import User from "./model/userModel.js";
import Product from "./model/productModel.js";
import Order from "./model/orderModel.js";
import connectionDB from "./config/db.js";

dotenv.config();

connectionDB();

//passes date into model and stored to db
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data imported successfully".green.inverse);

    process.exit();
  } catch (error) {
    console.log(`${error}`.red);
    process.exit(1);
  }
};
//deletes all data in db
const deleteAllData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data deleted".red.inverse);

    process.exit();
  } catch (error) {
    console.log(`${error}`.red);
    process.exit(1);
  }
};

//to start server loading sample data to db
if (process.argv[2] === "-d") {
  deleteAllData();
} else {
  importData();
}
