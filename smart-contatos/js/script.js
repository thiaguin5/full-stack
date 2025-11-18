const form = document.querySelector ("form")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");

form.addEventListener("submit" , function(event) {
     event.preventDefault();



     console.log("Nome", inputNome.value)
     console.log("Email", inputEmail.value)
     console.log("telefone", inputTel.value)
     
})

if (inputNome.value =="" || inputEmail.value == "" || inputTel.value) {
    alert("digite seus dados")
    return false;
}


//criar li 

const li = document.createElement("li")











     










