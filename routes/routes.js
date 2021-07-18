const express = require("express");

const userRoute = express.Router();
const { getUsers, createUser } = require("../controllers/bootcamps");

userRoute.get("/", getUsers);

userRoute.get("/:id", () => {});

userRoute.post("/createUser", createUser);
userRoute.put("/:id", () => {});

userRoute.delete("/", () => {});
module.exports = userRoute;
