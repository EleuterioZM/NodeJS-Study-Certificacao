const express = require("express");
const app = express();


// Iniciando o servidor na porta 8081
app.listen(8081, () => {
    console.log("Servidor rodando na URL http://localhost:8081");
});
