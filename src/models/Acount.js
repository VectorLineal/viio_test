const mongoose = require('mongoose');

const acountSchema = mongoose.Schema({
    code: {
        type: Number,
        min: 0
    },
    amount: {
        type: Number,
        min: 0,
        default: 4000
    },
    client: {
        type: mongoose.ObjectId,
        ref: 'Client',
        require: true
    }
});

module.exports = mongoose.model('Acount', acountSchema);