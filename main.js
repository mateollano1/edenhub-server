const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./app/core/config');
const app = express()

const routes = require('./app/api');
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(routes);

app.get('/**', (req, res) => {
    return res.status(400).json({
        status: '400',
        message: 'Bad request'
    });
})

app.use((err, req, res, next) => {
    res.status(500).json({
        err,
        message: "Error internal server."
    })
})

mongoose.connect('mongodb://localhost:27017/food', { useNewUrlParser: true })
    // mongoose.connect('mongodb://mongo-image/food', { useNewUrlParser: true })
    .then(() => {
        console.log('Mongo conected');

        app.listen(config.PORT, () => {
            console.log('Server listening in port: ' + config.PORT);
        });

    })
    .catch(err => console.log(err));