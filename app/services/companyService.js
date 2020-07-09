const Company = require('../models/company')
const company = require('../models/company')

getCompanies = async() => {
    try {
        return await Company.find()
    } catch (error) {
        return error
    }
}

getCompanyById = async(id) => {
    return await Company.findById(id)
}

createCompany = async(company) => {
    let newCompany = new Company(company)
    return await newCompany.save({ new: true })
}

updateCompany = async(id, company) => {
    return await Company.findByIdAndUpdate(id, company, { new: true })
}

module.exports = {
    getCompanies,
    getCompanyById,
    createCompany,
    updateCompany
}