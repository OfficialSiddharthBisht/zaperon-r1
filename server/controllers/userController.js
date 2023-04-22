const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");


// Register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    const { name, email, password } = req.body.payload;
    const user = await User.create({
        name,
        email,
        password,
        // !avatar
        avatar: {
            public_id: "sample id",
            url: "profile pic url",
        },
    });

    // const token = await user.getJWTToken();

    // res.status(201).json({
    //     success: true,
    //     token,
    // })
    sendToken(user, 201, res);
})


// Login User 
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body.payload;

    // checking if user has given password and email both
    if (!email || !password) {
        return next(new ErrorHandler("Please enter email and password", 500));
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    // const token = await user.getJWTToken();

    // res.status(200).json({
    //     success: true,
    //     token,
    // });
    sendToken(user, 200, res);
});

// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })
    res.status(200).json({
        success: true,
        message: "Logged Out"
    })
})

// Get user details -> works only after login 
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    })
})