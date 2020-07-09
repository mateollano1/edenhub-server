const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promotionCode = new Schema({
    code: { type: String, required: true },
    endDay: { type: String },
    avaliable: { type: Boolean },
    count: { type: Number },
}, {
    timestamps: true
})

module.exports = mongoose.model("PromotionCode", promotionCode);