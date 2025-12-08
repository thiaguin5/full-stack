import expresss from "express"
import conexao from ".../infra/conexao.js"
const app = expresss();

app.get ("/", (req, res) => {

    res.send("ola copa-mundo");

    
})

//buscar todas as seleções 
app.get('selecoes', (req, res) => {

    const sql = 'SELECT * FROM selecoes';

    conexão.query(sql, (erro, result) => {
        result.json(result);
    })
});

//buscando por id
app.get('/selecoes/:id', (req, res) => {
const id = req.params.id;
    const sql = "SELECT * FROM selecoes WHERE id = ${id}";


})
    const id = req.params.id;
    const sql = "SELECT * FROM selecoes WHERE id = ${id}";

    conexao.query(sql, id, (erro, result) => {
        res.json(result[0]);

    });

    // deletar seleção por id
app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM selecoes WHERE id = ?";

    conexao.query(sql, [id], (erro, result) => {
        res.json(result[0])

    });
});



export default app;


