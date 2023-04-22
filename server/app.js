const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const errorMiddleware = require("./middlewares/error");

app.use(express.json());
app.use(cookieParser());

// Route imports
const user = require("./routes/userRoutes");


app.use("/api/v1", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;