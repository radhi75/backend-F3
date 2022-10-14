const express = require("express");
const {
  Adduser,
  Getuser,
  Deleteuser,
  Edituser,
  Getoneuser,
} = require("../controlles/user");

const userRoute = express.Router();

userRoute.post("/add", Adduser);

userRoute.get("/users", Getuser);
userRoute.delete("/del/:id", Deleteuser);
userRoute.put("/edit/:id", Edituser);
userRoute.get("/getone/:id", Getoneuser);

module.exports = userRoute;
