const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Aprendendo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.log('Erro ao conectar ao MongoDB: ' + err);
});




