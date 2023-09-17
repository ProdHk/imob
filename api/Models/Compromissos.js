const mongoose = require('mongoose')


const Compromisso = mongoose.model('Compromisso', {
    name: String,
    date: Date,
    client: String,
    product: Number,
    state: Boolean
})



module.exports = Compromisso