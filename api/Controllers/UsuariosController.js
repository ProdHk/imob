const Usuarios = require('../Models/Usuarios')


    async function getUsers(req, res){
        try {
            
        const data = await Usuarios.find()
        res.status(200).json({message:`${data.length} Usuarios foram carregados`, data})
        console.log(`Usuarios carregados com sucesso`)
    } catch (error) {
        console.log(`${data.length} Usuarios foram carregados`)
        res.status(500).json({message:`${data.length} Usuarios foram carregados`})
            
        }
    }

    async function addUser(req, res){
        const userImage = req.files.image
        const pathImage = __dirname + "/../Uploads/" + userImage.name
        if(req.body.length == 0 ){
          res.status(500).json({message:`Nenhum usuario foi cadastrado por falta de informação`})      
        }
        const {name, username, pass, type} = req.body
        const newUser = {name, username, pass, type, pathImage}

        try {
            await Usuarios.create(newUser)
            
            userImage.mv(pathImage)
            console.log(`Usuario cadastrado com sucesso`)
            res.status(201).json({message:`Usuario cadastrado com sucesso`})
        } catch (error) {
            console.log(`Aconteceu algum erro ao cadastrar o usuario`, error)
            res.status(201).json({message:`Aconteceu algum erro ao cadastrar o usuario`, error})
            
        }
    }

    async function editUser(req,res){
        const id = req.params.id
        const {name, username, pass, type, image} = req.body
        const userEdited = {name, username, pass, type, image}
        try {
            await Usuarios.findByIdAndUpdate(id,userEdited)
            console.log(`Usuario editado com sucesso`)
            res.status(200).json({message:`Usuario editado com sucesso`})
        } catch (error) {
            console.log(`Houve algum erro ao editar o usuario`)
            res.status(200).json({message:`Houve algum erro ao editar o usuario`})
        }
    }
    async function deleteUser(req,res){
        const id = req.params.id

        try {
            await Usuarios.findByIdAndDelete(id)
            console.log(`Usuario deletado com sucesso`)
            res.status(200).json({message:`Usuario deletado com sucesso`})
        } catch (error) {
            console.log(`Houve algum erro ao deletar o usuario`)
            res.status(200).json({message:`Houve algum erro ao deletar o usuario`})
        }
    }



module.exports = {
    getUsers,
    addUser,
    deleteUser,
    editUser
}