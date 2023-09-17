const mongoose = require('mongoose')


const Despesas = mongoose.model('Despesa', {
    
    id: Number,
    data: String,
    valor: Number,
    status: Boolean,

})


modeule.exports = Despesas