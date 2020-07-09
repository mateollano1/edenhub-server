const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promotion = new Schema({
    products: { type: [String] },
    totalPrice: { type: String },
    name: { type: String },
    description: { type: String },
    endDay: { type: Date }
}, {
    timestamps: true
})

module.exports = mongoose.model("Promotion", promotion);