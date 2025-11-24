const express = require ("express")
const app = express ()
const port = 3000;

//criar função
//rota principal
app.get('/',(req, res) => {
    res.send('bem vindo ao servidor Node.js');

})

//executando o servidor
app.listen(port, () => {
    console.log(`servidor rodando em https://localhost:${port}`)


})

