/*
Vamos criar um programa, que o usuario executa uma função 
e dentro dessa função 
e dentro dessa linha existe uma frase.
pode pular linhas.
*/

function executarFrases(frase) {
    document.write(frase);

}
function pularLinha() {
    document.write("<br>")
}

executarFrases("javascript com lógica");
pularLinha();
pularLinha();
executarFrases("olá rodrigo popeto");




