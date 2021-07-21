const express = require("express");

const userRoute = express.Router();
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/bootcamps");

userRoute.get("/", getUsers);

userRoute.get("/:id", () => {});
// create user
userRoute.post("/createUser", createUser);
// update users
userRoute.put("/:_id", updateUser);
// delete user
userRoute.delete("/deleteUser", deleteUser);
module.exports = userRoute;
