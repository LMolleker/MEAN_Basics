const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model("beer", beerSchema);