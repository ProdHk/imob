/* 

cód
N LOTE
QUADRA LOTE
LOCALIZAÇÃO
    BAIRRO
    MUNICIPIO
VALOR 
    A VISTA
    VALOR 210X
    VALOR 140X
    VALOR 120X

DESCRIÇÃO
    ÁREA
    TOPOGRAFIA
    AGUA
    LUZ
    ASFALTO
IMAGENS
*/

const mongoose = require('mongoose')

const Lotes = mongoose.model('Lote', {

        cod: Number,
        lote: Number,
        quadra: Number,
        valor: Number,
        status: Boolean,
        bairro: String,
        municipio: String,
        desc: {
            area: Number,
            topografia:String,
            agua: Boolean,
            luz: Boolean,
            asfalto: Boolean

        }
        
        
        /* localizacao: {
            bairro: String,
            municipio: String
        }, */
        /* {
            avista: Number,
            x210: Number,
            x140: Number,
            x120: Number,
        },
        desc: {
            area: Number,
            topografia:String,
            agua: Boolean,
            luz: Boolean,
            asfalto: Boolean

        }, */
})

module.exports = Lotes