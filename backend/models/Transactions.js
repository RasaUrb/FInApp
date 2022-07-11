const  mongoose = require("mongoose");

const Transactions = mongoose.model('Transactions', new mongoose.Schema({
    name: String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

    
}));

module.exports = Transactions