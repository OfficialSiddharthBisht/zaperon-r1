const app = require("./app");

const connectDatabase = require("./config/database");

require("dotenv").config();

const port = process.env.PORT || 3000;

// Handling Uncaught Exception (using a variable which is not defined)
process.on("uncaughtException", (err) => {
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
})



// Connect Database
connectDatabase();



const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// Unhandled promise rejection (eg :- mongo instead of mongodb)
// in these cases we have to crash our own server asap

process.on("unhandledRejection", err => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    })
})
