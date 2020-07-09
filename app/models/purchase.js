const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchase = new Schema({
    products: {
        type: [{
            idProduct: { type: String },
            ammount: { type: String }
        }]
    },
    totalPrice: { type: String },
    Note: { type: String },
    telephone: { type: String },
    name: { type: String },
    location: { type: String },
}, {
    timestamps: true
})

module.exports = mongoose.model("Purchase", purchase);