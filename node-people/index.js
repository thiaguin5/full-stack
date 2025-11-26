const express = require ("express");
const app= express();
const port = 3000;

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];

//criando funções auxiliares
//retornar o objeto por id

function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id)

}

app.listen (port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

//rota principal
app.get("/", (req, res) => {
    res.send("Bem vindo ao servidor principal!!!!!");
});

//rota de teste
app.get("/teste", (req, res) => {
    res.send("Rota de teste funcionando!");
});

//buscando nomes (lista nomes)
app.get("/listanomes", (req, res) => {
    res.json(nomes);
});

//buscando por id
app.get("/listanomes/:id", (req, res) => {
    let index = req.params.id;

    res.json(buscarNomePorId(index));




})



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});






