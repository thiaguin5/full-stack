import express from "express";
const app = express();

app.use(express.json());

const cadastros = [
{
id: 1,
nome: "Fernanda Silva",
telefone: "11987654321",
cpf: "123.456.789-00",
email: "fernanda@gmail.com",
idade: 28,
endereco: "Rua das Flores, 123"
},
{
id: 2,
nome: "Caio Oliveira",
telefone: "11922223333",
cpf: "987.654.321-11",
email: "caio@gmail.com",
idade: 32,
endereco: "Avenida Brasil, 450"
},
{
id: 3,
nome: "Pedro Almeida",
telefone: "21999998888",
cpf: "321.654.987-55",
email: "pedro@hotmail.com",
idade: 45,
endereco: "Rua Central, 999"
}
];

function buscarCadastroPorId(id) {
    return cadastros.filter((cadastro) => cadastro.id == id)
}

function buscarIdCadastros(id) {
    return cadastros.findIndex((cadastro) => cadastro.id == id)
}

app.get("/", (req, res) => {
    res.send("Olá Node js");
});

app.get("/listaCadastros", (req, res) => {
    res.send(cadastros);
});


app.get("/listaCadastros/:id", (req, res) => {
    let index = req.params.id;

    res.json(buscarCadastroPorId(index))
});

app.post("/listaCadastros", (req, res) => {
   cadastros.push(req.body)
   res.status(201).send('Cadastrado com sucesso') 
});

app.delete("/listaCadastros/:id", (req, res) => {
    let id = req.params.id;
    let index = buscarIdCadastros(id)

    if (index === -1) {
        return res.status(404).send(`Nenhum cadastro com id ${id} encontrado`)
    }

    cadastros.splice(index, 1);
    res.send(`Cadastro com id ${id} deletado com sucesso`)
});

app.put("/listaCadastros/:id", (req, res) => {
    let index = buscarIdCadastros(req.params.id);
    cadastros[index].nome = req.body.nome;
    cadastros[index].telefone = req.body.telefone;
    cadastros[index].cpf = req.body.cpf;
    cadastros[index].email = req.body.email;
    cadastros[index].idade = req.body.idade;
    cadastros[index].endereco = req.body.endereco;

    res.json(cadastros);
});

export default app;
