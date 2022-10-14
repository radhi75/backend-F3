const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("user", userSchema);
