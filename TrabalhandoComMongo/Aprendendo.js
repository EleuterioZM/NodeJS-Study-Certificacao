const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Aprendendo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.log('Erro ao conectar ao MongoDB: ' + err);
});

//Model - Usuarios
//Definindo o Model
const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    idade: {
        type: Number,
        required: true
    },
    pais: {
        type: String
        
    }
});
//  Collection - Usuarios
const Usuario = mongoose.model('Usuario', usuarioSchema);

//Criando um novo usuario
const usuario = new Usuario({
    nome: 'Eduardo',
    sobrenome: 'Silva',
    email: 'eduardo.silva@example.com',
    idade: 25,
    pais: 'Brasil'
});

//Salvando o usuario
usuario.save().then(() => {
    console.log('Usuario salvo com sucesso');
}).catch((err) => {
    console.log('Erro ao salvar o usuario: ' + err);
});

