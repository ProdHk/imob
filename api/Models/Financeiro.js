const mongoose = require("mongoose")


const Financeiro = mongoose.model("Financeiro",{
    type: String,
    value: Number,
    date: String,
    status: Boolean,
    desc: String
})


module.exports = Financeiro