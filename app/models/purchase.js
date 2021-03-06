const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchase = new Schema({
    products: {
        type: [{
            idProduct: { type: Schema.Types.ObjectId, ref: "Product" },
            ammount: { type: String },
            items:{type: [String]}
        }]
    },
    friendlyId: { type: String },
    totalPrice: { type: String },
    note: { type: String },
    telephone: { type: String },
    name: { type: String },
    location: { type: String },
}, {
    timestamps: true
})

module.exports = mongoose.model("Purchase", purchase);