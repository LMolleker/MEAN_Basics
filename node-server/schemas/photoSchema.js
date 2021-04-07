const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
    path : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("photo", photoSchema);

