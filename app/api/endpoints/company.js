const router = require('express').Router();
const companyService = require('../../services/companyService')

router.get('', async(req, res) => {
    try {
        let companies = await companyService.getCompanies()
        return res.status(200).json({
            companies
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})
router.get('/:id', async(req, res) => {
    try {
        let companies = await companyService.getCompanyById(req.params.id)
        return res.status(200).json({
            companies
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})
router.post('', async(req, res) => {
    console.log(req.body);

    let company = await companyService.createCompany(req.body)
    try {
        return res.status(200).json({
            company
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})
router.put('/:id', async(req, res) => {
    try {
        let companies = await companyService.updateCompany(req.params.id, req.body)
        return res.status(200).json({
            companies
        })
    } catch (error) {
        return res.status(400).json({ Message: "error" })
    }
})

module.exports = router;