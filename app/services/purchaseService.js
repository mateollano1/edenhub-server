const Purchase = require('../models/purchase')


createPurchase = async(purchase) => {
    let newPurchase = new Purchase(purchase)
    return await newPurchase.save({ new: true })
}

getPurchases = async() => {
    try {
        return await Purchase.find()
    } catch (error) {
        return error
    }
}

module.exports = {
    getPurchases,
    createPurchase
}