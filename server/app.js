const cookieParser = require("cookie-parser");
const express = require("express");
var cors = require("cors");

const app = express();

const errorMiddleware = require("./middlewares/error");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// Route imports
const user = require("./routes/userRoutes");


app.use("/api/v1", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;