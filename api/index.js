const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

// VARIAVEIS SENSIVEIS
const PORT = process.env.PORT
const KEYS = process.env.KEYS

// CONTROLLERS
const UsuariosController = require('./Controllers/UsuariosController')
const FinanceiroController = require('./Controllers/FinanceiroController')
const LotesController = require('./Controllers/LotesController')
const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())

// CONEXÃO COM O DB
try {
    mongoose.connect(KEYS).then(console.log(`Conectado ao banco de dados`))
    app.listen(PORT, ()=> console.log(`Servidor iniciado na porta ${PORT} com sucesso!`))
} catch (error) {
    console.log(error)
}



// ROTAS
app.get('/users', UsuariosController.getUsers )
app.get('/financeiro', FinanceiroController.getFinanceiro )
app.get('/lotes', LotesController.getlotes )
app.get('/buscar-lotes', LotesController.buscarLotesRelacionados )

app.post('/users', UsuariosController.addUser )
app.post('/financeiro', FinanceiroController.addFinanceiro )
app.post('/lotes', LotesController.postLotes )

app.delete('/users/:id', UsuariosController.deleteUser)
app.delete('/financeiro/:id', FinanceiroController.removeFinanceiro)
app.delete('/lotes/:id', LotesController.deleteLotes )

app.put('/users/:id', UsuariosController.editUser)
app.put('/financeiro/:id', FinanceiroController.editFinanceiro)
app.put('/lotes/:id', LotesController.putLotes )
app.put('/lotes/:id', LotesController.venderLote )