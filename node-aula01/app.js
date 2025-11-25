const express  = require("express");
const app = express();
const port = 3000;

// middleware para servir arqivos estáticos
app.use(express.static('public'));

// Variável com os dados produtos
const produtos = [
    { id: 1, nome: 'Produto A', preco: 100 },
    { id: 2, nome: 'Produto B', preco: 150 },
    { id: 3, nome: 'Produto C', preco: 200 },
];

//variavel de times
const times = [

    {id: 1, nome: 'santos', ano: 1912},
    {id: 2, nome: 'santos', ano: 1910},
    {id: 3, nome: 'santos', ano: 1904},
     

];

 


// Criar função
// Rota principal
app.get('/', (req, res) => {
    res.send('Bem vindo ao servidor Node.js');
});

// Rota de produtos
app.get('/produtos', (req, res) => {
    res.send(produtos);
});

// Rota home
app.get('/home', (req, res) => {
    //console.log("ola: ",__dirname);
    res.sendFile(__dirname + '/public/home.html');
});

//Rota times
app.get('/times', (req, res) => {
    res.send(times);

})

// Executando o sevidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});