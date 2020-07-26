const router = require('express').Router();


const purchaseService = require('../../services/purchaseService')
const { getFoodImage } = require('../../utils/imageFood');
const mailService = require('../../services/mailService')


router.post('/', async(req, res) => {
    try {
        let purchase = req.body
        let newPurchase = await purchaseService.createPurchase(purchase)
        mailService.sendMail(newPurchase)
        return res.status(200).json({
            newPurchase
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }

})

router.get('/:id', async(req, res) => {
    try {
        let id = req.params.id
        let order = await purchaseService.getPurchaseById(id)
        return res.status(200).json({
            order
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})


router.get('/', async(req, res) => {
    try {
        let order = await purchaseService.getPurchases()
        return res.status(200).json({
            order
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})
module.exports = router;