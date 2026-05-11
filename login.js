function entrar() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (!email && !senha) {
        alert("Preencha e-mail e senha por favor");
    } else if (!email) {
        alert("Preencha o gmail");
    } else if (!senha) {
        alert("Preencha a senha");
    } else {
        alert("Entrando...");
    }
}