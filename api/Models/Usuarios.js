const mongoose = require('mongoose')


const Usuarios = mongoose.model('Usuario', {
    nome: String,
    usuario: String,
    pass: Number,
    type: String,
    fotoP: String,
    data: Date,
})



module.exports = Usuarios