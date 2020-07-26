const Purchase = require('../models/purchase')


createPurchase = async(purchase) => {
    let newPurchase = new Purchase(purchase)
    return await newPurchase.save({ new: true })
}

getPurchases = async() => {
    try {
        return await Purchase.find()
            .populate('products.idProduct')
    } catch (error) {
        return error
    }
}

getPurchaseById = async(idPurchase) => {
    try {
        return await Purchase.findById(idPurchase)
            .populate('products.idProduct')
    } catch (error) {
        return error
    }
}

module.exports = {
    getPurchases,
    createPurchase,
    getPurchaseById
}