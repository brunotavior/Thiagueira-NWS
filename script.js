function cadastre_email() {
    let input_value = document.querySelector("input").value
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(input_value)) {
        document.getElementById("content").remove()
        document.querySelector('h1').innerText = "Parabéns, cadastro realizado com sucesso!"
    } else { alert("Insira um e-mail válido.")
    }
}