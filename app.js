const express = require("express");
const mongoose = require("mongoose");
// const UserModule = require("./api/modules/UserModules");
const app = express();
// const Routes=require('./api/routes/Routes')

app.use(express.json());


const mongooseLink = "mongodb+srv://Supreme:Yousefamer543211111@supreme.qztyiss.mongodb.net/"
mongoose.connect(mongooseLink);

// when your_database connected
mongoose.connection.on("connected", () => {
    console.log("mongo connected");
});
// error case
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

app.get('/app', (req, res) => {
    res.status(400).json({
        test: "test"
    })
});

app.get('/', (req, res) => {
    res.status(400).json({
        test: "live"
    })
});





// app.use(Routes)

// export to "./server" to run in your port"
module.exports = app;