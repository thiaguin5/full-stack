const form = document.querySelector ("form")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");

form.addEventListener("submit" , function(event) {
     event.preventDefault();



//validação do formulário
/*

se o input for vazio,adicionar uma mensagem

*/

     console.log("Nome", inputNome.value)
     console.log("Email", inputEmail.value)
     console.log("telefone", inputTel.value)
     
})

if (inputNome.value =="") {
alert("preencha a caixa")
return false;

}

if (inputEmail.value =="") {
alert("preencha a caixa")
return false;

}

if (inputTel.value =="") {
alert("preencha a caixa")
return false;


}



// function btnCadastrar(event) {
//    event.preventDefault();
//    console.log(inputNome.value);
//  console.log(inputEmail.value);
//    console.log(inputTel.value);
// }