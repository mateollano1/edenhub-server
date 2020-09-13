const router = require('express').Router();


const productService = require('../../services/productService')
const { getFoodImage } = require('../../utils/imageFood');
const mailService = require('../../services/mailService')

router.get('', async(req, res) => {
    try {
        let products = await productService.getProducts()
        return res.status(200).json({
            products
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})


router.get('/search', async(req, res) => {
    try {
        let products = ""
        let image = ""
        if (req.query.name !== undefined) {
            products = await productService.getProductByName(req.query.name)
        } else if (req.query.companyId !== undefined) {
            products = await productService.getProductByCompany(req.query.companyId)
        } else if (req.query.type !== undefined) {
            products = await productService.getProductByType(req.query.type)
            image = getFoodImage(req.query.type)
        } else {
            return res.status(400).json({ Message: "Not Valid Params" })
        }
        return res.status(200).json({
            'image': image,
            'products': products
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})


router.get('/searchP', async(req, res) => {
    try {
        word = req.query.q
        word = word.toLowerCase()
        let products = await productService.getSearchsProducts(word)
        return res.status(200).json({
            products
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})


router.get('/:id', async(req, res) => {
    try {
        let products = await productService.getProductById(req.params.id)
        return res.status(200).json({
            products
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})


router.post('', async(req, res) => {
    let product = await productService.createProduct(req.body)
    try {
        return res.status(200).json({
            product
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})


router.post('/bill', async(req, res) => {
    try {
        deliveryPrice = 0
        finalPrice = 0
        console.log(req.body);
        let cartProduct = req.body
        let bill = []
        for (let index = 0; index < cartProduct.length; index++) {
            const element = cartProduct[index];
            // let res = element.split(" X")
            // if (res[0] == null || res[1] == null) {
            //     return
            // }
            // productId = res[0]
            // ammount = res[1]
            ammount = element.units
            productId = element.idProduct
            let product = await productService.getProductById(productId)
            let price = product.price * ammount
            bill.push({
                "product": product,
                "ammount": ammount,
                "price": price,
                "items": element.items
            })
            finalPrice = price + finalPrice 
        }
        if (cartProduct.length > 0) {
            let delivery ={
                name: "Entrega a Domicilio",
                price: deliveryPrice,
                type: "-1"

            }
            bill.push({
                "product": delivery,
                "ammount": 1,
                "price": deliveryPrice,
            })
            finalPrice = (deliveryPrice + finalPrice )
            return res.status(200).json({
                'finalPrice': finalPrice.toString(),
                'bill': bill 
            })
        }
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})


router.put('/:id', async(req, res) => {
    try {
        let products = await productService.updateProduct(req.params.id, req.body)
        return res.status(200).json({
            products
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})




module.exports = router;