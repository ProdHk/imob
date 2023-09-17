const { ObjectId } = require('mongoose')
const Financeiro = require('../Models/Financeiro')


    async function getFinanceiro(req,res){

        try {
            const data = await Financeiro.find()
            console.log(`Busca realizada com sucesso`)
            res.status(200).json({msg:` ${data.length} - Busca realizada com sucesso`, data})
        } catch (error) {
            console.log(error)
            res.status(501).json({msg:`Algo de errado aconteceu`})
        }
    }
    async function addFinanceiro(req,res){
        
        /* console.log(Date(date).toString()) */
        const date = Date.now()
        const {type, value, desc} = req.body
        const item = {type, value, status: false, date, desc}
        try {
            await Financeiro.create(item)
            res.status(201).json({msg:`Item criado com sucesso`})

        } catch (error) {
            console.log(error)
            res.status(500).json({msg:`Aconteceu algum problema`})
        }

        
    }
    async function removeFinanceiro(req,res){
        
        //validação 

        const id = req.params.id
        try {
            await Financeiro.findByIdAndDelete(id)
            res.status(201).json({msg:`Item deletado com sucesso`})

        } catch (error) {
            console.log(error)
            res.status(500).json({msg:`Aconteceu algum problema`})
        }

        
    }

    async function editFinanceiro(req,res){

        const id = req.params.id
        const {value, status, desc} = req.body
        const update = {value, status, desc}
        try {
            await Financeiro.findByIdAndUpdate(id, update)
            res.status(201).json({msg:`Atualizado com sucesso`})
        } catch (error) {
            console.log(error)
            res.status(401).json({msg:`Aconteceu algo de errado`})
        }
    }

module.exports = {
    getFinanceiro,
    addFinanceiro,
    removeFinanceiro,
    editFinanceiro
}