const router = require('express').Router();
const fs = require('fs');

const purchaseService = require('../../services/purchaseService')
const { getFoodImage } = require('../../utils/imageFood');
const mailService = require('../../services/mailService')


router.post('/', async(req, res) => {
    try {
        let purchase = req.body
        friendlyId = fs.readFileSync('./app/utils/friendlyId.txt', 'utf8')
        friendlyId = parseInt(friendlyId) + 1
        fs.writeFileSync('./app/utils/friendlyId.txt', friendlyId)
        friendlyId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1) + friendlyId
        purchase.friendlyId = friendlyId
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