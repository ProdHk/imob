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

async function buscarLotesRelacionados(req, res){
    const {municipio} = req.body

    try {

         const lotes = await Lotes.find({municipio}).then((i) =>{ return i})
        console.log(`Lote encontrado`, lotes)
        res.status(200).json({msg: `${lotes.length > 1 ? `${lotes.length} lotes foram encontrados` : `${lotes.length} lote foi encotrado`}`,lotes })
    } catch (error) {
        console.log(`Algo de errado aconteceu`)
        res.status(500).json({msg:`Algo de errado aconteceu`})
    }
}


async function postLotes(req, res){

    const {cod,lote, quadra, valor,bairro, municipio, desc} = req.body
    const newLote = {cod, lote, quadra, valor, status:false, bairro, municipio, desc, path:"vazio"}
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

    const id = req.params.id
    const {lote, quadra, valor,  bairro, municipio} = req.body
    const editedLote = {lote, quadra, valor, bairro, municipio}
        try {
            Lotes.findByIdAndUpdate(id, editedLote)
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
        await Lotes.findByIdAndDelete(id)
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
    deleteLotes,
    buscarLotesRelacionados
}