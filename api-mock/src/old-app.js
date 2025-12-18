import express from "express";


const app = express();

// Indicar para express ler o body com json
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá Copa do Mundo!");
});

// Buscar todas as seleções 
app.get('/selecoes', (req, res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result) => {
        res.json(result);
    });
});

// Buscando por ID
app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "select * from selecoes where id=?;";

    conexao.query(sql, id, (erro, result) => {
        res.json(result[0]);
    });
});

// Criando POST para cadastrar 
app.post('/selecoes', (req, res) => {
    const selecao = req.body;
    const sql = "INSERT INTO selecoes SET?;";

    conexao.query(sql, selecao, () => {
        res.json({ mensagem: "Cadastrado com sucesso!"});
    })
});



// Deletando registro
app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from selecoes where id=?";

    conexao.query(sql, id, () => {
        res.json({ menssagem: "Deletando com sucesso"});
    });
})


app.put('/selecoes/:id', (req, res) => {

    const id = req.params.id;
    const selecao = req.body;
    const sql = "update selecoes set ? where id=?";

    conexao.query(sql, [selecao, id], () => {
        res.json({ mensagem: "Atualizado com sucesso!"});
    });
});


export default app;