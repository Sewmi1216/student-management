const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//assign the server port 8070 or if it's not available assign any other port number
const PORT = process.env.PORT || 8070;


app.use(cors());    //use cors()
app.use(bodyParser.json());     //json format

//mongodb configuration
const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
})

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection success!");
})


const studentRouter = require("./routes/students");
app.use("/student", studentRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})





