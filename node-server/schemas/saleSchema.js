const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    totalPrice : {
        type : Number,
        required : true
    },
    items : [{
        name : {
            type : String,
            required : true
        },
        quantity : {
            type : Number,
            required : true
        },
        totalPrice : {
            type : Number,
            required : true
        }
    }]
});

module.exports = mongoose.model("sale", saleSchema);