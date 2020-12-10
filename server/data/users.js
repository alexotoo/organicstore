import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin user",
    email: "examplesadmin@try.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ama Esi",
    email: "exampeama@try.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Kofi Sam",
    email: "kofimandmin@try.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
