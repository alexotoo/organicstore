import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `db via mongoose:${connect.connection.host}`.underline.brightBlue
    );
  } catch (error) {
    console.error(`Error:${error.message}`.red);
    process.exit(1);
  }
};
export default connectionDB;
