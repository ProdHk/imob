const Lotes = require('../Models/Lotes')


const { ObjectId } = require('mongoose')

async function getlotes(req, res){
        try {
            const lotes = await Lotes.find()
            console.log(`Lotes carregados com sucesso!`)
            res.status(200).json({msh:`Lotes carregados com sucesso!`, lotes})
        } catch (error) {
            
            console.log(`Algo de errado aconteceu e os lotes não carregaram ...`, error)
            res.status(500).json({msh:`Algo de errado aconteceu e os lotes não carregaram ...`})
        }
}


async function postLotes(req, res){

    const {cod,lote, quadra, valor, status} = req.body
    const newLote = {cod, lote, quadra, valor, status}
    try {
        await Lotes.create(newLote)
        console.log(`Lote cadastrado com sucesso!`)
        res.status(200).json({msg:`Lote cadastrado com sucesso!`})
    } catch (error) {
        
        console.log(`Algo de errado aconteceu ...`, error)
        res.status(500).json({msg:`Algo de errado aconteceu`})
    }
}
async function putLotes(req, res){
    const cod = req.params
    const {lote, quadra, valor, status} = req.body
    const editedLote = {cod, lote, quadra, valor, status}
        try {
            Lotes.findByIdAndUpdate(cod, editedLote)
            console.log(`O lote foi editato com sucesso!`)
            res.status(200).json({msg:`O lote foi editato com sucesso!`})
        } catch (error) {
            console.log(`Algo de errado aconteceu`, error)
            
            res.status(500).json({msg:`Algo de errado aconteceu`})
        }

}
async function venderLote(req, res){
    const cod = req.params
    const status = req.body
    
        try {
            Lotes.findByIdAndUpdate(cod, status)
            console.log(`O lote foi vendido com sucesso!`)
            res.status(200).json({msg:`O lote foi vendido com sucesso!`})
        } catch (error) {
            console.log(`Algo de errado aconteceu`, error)
            
            res.status(500).json({msg:`Algo de errado aconteceu`})
        }

}
async function deleteLotes(req, res){
    const id = req.params.id
    console.log(id)
    try {
        await Lotes.findByIdAndDelete(ObjectId(id))
        console.log(`O lote foi deletado com sucesso!`)
        res.status(200).json({msg:`O lote foi deletado com sucesso!`})
    } catch (error) {
        console.log(`Algo de errado aconteceu`, error)
        
        res.status(500).json({msg:`Algo de errado aconteceu`})
    }
}

module.exports  = {
    getlotes,
    postLotes,
    putLotes,
    venderLote,
    deleteLotes
}