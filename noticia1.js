const sessaoAtual = JSON.parse(sessionStorage.getItem("pgs_sessao") || "null");

let avatar = document.querySelector(".input-comentario .avatar");
if (sessaoAtual && sessaoAtual.foto && avatar) {
    avatar.src = sessaoAtual.foto;
}

function comentar() {
    let texto = document.getElementById("comentario").value;
    if (!texto) {
        alert("Escreva algo antes de comentar!");
    } else {
        alert("Comentário enviado!");
    }
}