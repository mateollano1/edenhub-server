const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const company = new Schema({
    name: { type: String, required: true },
    representative: { type: String },
    history: { type: String },
    protocol: { type: String },
    icon: { type: String },
    mail: { type: String },
    telephone: { type: String },
    location: { type: String },
    avaliable: { type: Boolean }
}, {
    timestamps: true
})

module.exports = mongoose.model("Company", company);