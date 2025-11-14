/*
  Vamos criar um programa, de pontos ganhos do seu time em jogos de futebol
*/

/*
Pesando no programa:
1- Criar uma variavel vitorias, perguntando para o usuario, quantos jogos se time venceu
2- Criar outra variavel empates, perguntando quanto jogos o time empatou
3 - Criar uma variavel de pontos (multiplicar a variavel vitorias * 3) e somar com a variavel empates;
4 - Mostrar na tela esse resultado
*/

/*
Implementar condições,

Se os pontos for maior que 10:
Mostrar a mensagem, "Seu time está indo bem"

Se os pontos for menor que 5:
Mostrar a mensagem, "Seu time precisa melhorar"

*/

const vitorias = Number(prompt("quantos jogos se time venceu?")); 
const empates = Number(prompt("quanto jogos o time empatou?"));


const pontos=(vitorias * 3 + empates)

document.write("o resultado de pontos do seu time é" + pontos);


 if (pontos > 10 ){
     alert("Seu time esta indo bem");
}
    
 else if (pontos < 5 ) {
    alert("Seu time preisa melhorar");

} else {
    alert("seu time esta mediano")
}




 
    







