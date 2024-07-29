const express = require("express");
const mongoose = require("mongoose");
const UserModule = require("./api/modules/UserModules");
const app = express();
const Routes=require('./api/routes/Routes')

app.use(express.json());


const mongooseLink = "mongodb+srv://Supreme:Yousefamer543211111@supreme.qztyiss.mongodb.net/"
mongoose.connect(mongooseLink);

// when your_database connected
mongoose.connection.on("connected", () => {
    console.log("mongo connected");
});
app.use(Routes)
// error case
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

app.get('/app', (req, res) => {
    res.status(400).json({
        test: "test"
    })
});

app.post('/what-is-my-name', (req, res) => {
    const { myname } = req.body
    console.log();
    res.status(400).json({
        name: myname,
    })
});

app.post('/name-and-family', (req, res) => {
    const { myname, Family } = req.body
    console.log();
    res.status(400).json({
        name: myname,
        Family: Family
    })
});

app.post('/what-is-my-Age', (req, res) => {
    const { myAge } = req.body
    console.log();
    if (myAge > 18) {
        res.status(400).json({
            response: "Welcome"
        })
    } else {
        res.status(400).json({
            response: "You are a baby"
        })
    }


});

app.get('/', (req, res) => {
    res.status(400).json({
        test: "live"
    })
});







// export to "./server" to run in your port"
module.exports = app;