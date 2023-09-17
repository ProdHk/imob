const mongoose = require('mongoose')

const Clientes = mongoose.model('Cliente', {
    
    nome: String,
    renda:Number,
    tel: Number,
    endereco: String,
    foto: String

})

module.exports = Clientes