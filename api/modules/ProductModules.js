const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    ProductName:{
        type:String,
        required: true,
        unique:true,
    },
    ProductPrice:{
        type:String,
        required: true
    },
    Color:{
        type:String,
        required: true,

    },
    image:String
});

const ProductModule = mongoose.model('Product', ProductSchema);
// key / refers / to dataBase

module.exports = ProductModule