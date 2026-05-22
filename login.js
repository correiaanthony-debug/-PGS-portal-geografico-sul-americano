
if (sessionStorage.getItem("pgs_sessao")) {
    window.location.href = "index.html";
}
 
function entrar() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
 
    let emailSalvo = localStorage.getItem("usuarioEmail");
    let senhaSalva = localStorage.getItem("usuarioSenha");
    let nomeSalvo  = localStorage.getItem("usuarioNome");
 
    if (!email || !senha) {
        alert("Preencha e-mail e senha!");
        return;
    }
 
    if (email === emailSalvo && senha === senhaSalva) {
        sessionStorage.setItem("pgs_sessao", JSON.stringify({ nome: nomeSalvo, email: email }));
        alert("Login realizado!");
        window.location.href = "index.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
}
 
function verSenha(inputId, olhoId) {
    let input = document.getElementById(inputId);
    let olho  = document.getElementById(olhoId);
    if (input.type === "password") {
        input.type = "text";
        olho.src = "visivel.png";
    } else {
        input.type = "password";
        olho.src = "olho.png";
    }
}