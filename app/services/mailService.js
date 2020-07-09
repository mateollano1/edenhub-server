const nodemailer = require("nodemailer");
const pug = require('pug');
var path = require("path");
const { getMaxListeners } = require("process");

sendMail = async(purchase) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'edenhubrionegro@gmail.com',
            pass: 'bipiju81' // naturally, replace both with your real credentials or an application-specific password
        }
    });
    const compiledFunction = pug.compileFile(path.resolve("./") + '/app/utils/mail.pug');
    let info = await transporter.sendMail({
        from: '"Eden Hub " <edenhubrionegro@gmail.com>', // sender address
        to: "edenhubrionegro@gmail.com", // list of receivers
        subject: `Nueva compra realizada ✔`, // Subject line
        html: compiledFunction({
            name: purchase.name,
            telephone: purchase.telephone,
            note: purchase.note,
            location: purchase.location,
            products: purchase.products,
            totalPrice: purchase.totalPrice,
            idPurchase: purchase.id
        })

    });

    transporter.sendMail(info, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


}
module.exports = { sendMail }