const express = require("express");
const connectDB = require("./config/connectDB");
const userRoute = require("./routes/user");
const app = express();

app.use(express.json());

const port = 5000;
connectDB();

app.use("/api/users",userRoute);
app.listen(port, console.log(`app is running on port ${port}`));
