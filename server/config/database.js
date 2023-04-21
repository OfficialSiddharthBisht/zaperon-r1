const mongoose = require("mongoose");

const connectDatabase = () => {
    // mongoose.connect(process.env.DB_URI, {
    mongoose.connect("mongodb+srv://officialsiddharthbisht:siddhu-58558@cluster0.kcbiwjk.mongodb.net/test", {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Mongodb connected with server : ${data.connection.host}`);
    })
}

module.exports = connectDatabase;