const express = require ("express")
const app = express ()
const port = 3000;

const produtos = [
    {id: 1, nome: 'produto a', preco:100},
    {id: 2, nome: 'produto b', preco:150},
    {id: 3, nome: 'produto c', preco:200},
]



//criar função
//rota principal
app.get('/',(req, res) => {
    res.send('bem vindo ao servidor Node.js');

})

// rota produtos
app.get('/produtos', (req, res) => {
    res.send(produtos)

})

//rota home
app.get('/home,', (req, res) => {   
    //console.log("olá",__dirname + '')
    res.sendFile(__dirname + '/public/home.html')   
})

//executando o servidor
app.listen(port, () => {
    console.log(`servidor rodando em https://localhost:${port}`)


})

