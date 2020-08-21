const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    name: { type: String, required: true },
    companyId: { type: String },
    price: { type: String },
    description: { type: String },
    Ingredients: { type: [String] },
    avalaible: { type: Boolean },
    letSelectedItems: {type: Number},
    items:[{
        name: {type: String},
        url: { type: String }
    }],
    type: { type: String },
    images: [{
        url: { type: String }
    }],
    thumbnails: [{
        url: { type: String }
    }],
    score: { type: [String] },
}, {
    timestamps: true
})

module.exports = mongoose.model("Product", product);