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



export default app;


