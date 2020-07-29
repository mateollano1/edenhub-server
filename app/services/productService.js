const Product = require('../models/product')
const { getFoodType } = require('../utils/typefood.js')
const product = require('../models/product')
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

getSearchsProducts = async(param) => {
    let products = await getProducts()
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        productLineal = element.name.toLowerCase()
        if (productLineal.indexOf(param) == -1) {
            console.log(productLineal);
            products.splice(index, 1);
        }
    }
    return products
}

module.exports = {
    getProductByName,
    getProductByCompany,
    getProductByType,
    getProductById,
    updateProduct,
    createProduct,
    getProducts,
    getSearchsProducts
}