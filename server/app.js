const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const errorMiddleware = require("./middlewares/error");

app.use(express.json());
app.use(cookieParser());

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;