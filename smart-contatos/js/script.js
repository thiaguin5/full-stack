const form = document.querySelector("form");
const lista = document.querySelector(".lista");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");
const listaMsg =  document.querySelector("listamsg");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Validação do formulário
    if (inputNome.value == "" || inputEmail.value == "" || inputTel.value == "") {
        alert("Digite seus dados");
        return false;
    }

    //condição, para retirar a li com lista-Msg
    //( se listaMsg === true )

    if (listaMsg) {
        const listaMsg = document.querySelector("listaMsg");
        listaMsg.remove(); 
    

// removendo lista

    }


    

    // Criar LI
    const li = document.createElement("li");

    li.innerHTML = `
        <span class="contato-nome">${inputNome.value}</span>
        <span class="contato-email">${inputEmail.value}</span>
        <span class="contato-telefone">${inputTel.value}</span>
    `;

    console.log(li)


    // appendChild()
    lista.appendChild(li)

    // Limpar inputs
    form.reset();

})










     










