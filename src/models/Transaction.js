const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    creation: {
        type: Date,
        default: Date.now
    },
    origin: {
        type: mongoose.ObjectId,
        ref: 'Acount',
        require: true
    },
    target: {
        type: mongoose.ObjectId,
        ref: 'Acount',
        require: true
    },
    amount: {
        type: Number,
        min: 0
    },
    status: {
        type: String,
        default: "exitosa",
        enum: ["pendiente", "fallida", "exitosa"]
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);