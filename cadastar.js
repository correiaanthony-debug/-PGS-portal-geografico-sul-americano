function entrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let emailc = document.getElementById("emailc").value;
    let senha = document.getElementById("senha").value;
    let senhac = document.getElementById("senhac").value;
    let numero = document.getElementById("numero").value;

    let faltando = [];

    if (!nome) faltando.push("nome");
    if (!email) faltando.push("email");
    if (!numero) faltando.push("numero");
    if (!senha) faltando.push("senha");

    if (faltando.length > 0) {
        alert("Preencha: " + faltando.join(", "));
        return;
    }

    if (email !== emailc) {
        alert("o email tem algo de errado");
    } else if (senha !== senhac) {
        alert("a senha tem algo de errado");
    } else {
        alert("Cadastro realizado!");
    }
}