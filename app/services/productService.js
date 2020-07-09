const Product = require('../models/product')
const { getFoodType } = require('../utils/typefood.js')
getProducts = async() => {
    try {
        return await Product.find()
    } catch (error) {
        return error
    }
}

createProduct = async(product) => {
    let newProduct = new Product(product)
    return await newProduct.save({ new: true })
}

updateProduct = async(id, product) => {
    return await Product.findByIdAndUpdate(id, product, { new: true })
}

getProductById = async(id) => {
    return await Product.findById(id)
}

getProductByName = async(param) => {
    try {
        return await Product.find({ name: param })
    } catch (error) {
        return error
    }
}

getProductByCompany = async(param) => {
    return await Product.find({ companyId: param })
}

getProductByType = async(param) => {
    typeNumber = getFoodType(param)
    return await Product.find({ type: typeNumber })
}

module.exports = {
    getProductByName,
    getProductByCompany,
    getProductByType,
    getProductById,
    updateProduct,
    createProduct,
    getProducts
}