const sessaoAtual = JSON.parse(sessionStorage.getItem("pgs_sessao") || "null");

let avatar = document.querySelector(".input-comentario .avatar");
if (sessaoAtual && sessaoAtual.foto && avatar) {
    avatar.src = sessaoAtual.foto;
}


if (sessaoAtual) {
    let pontos = parseInt(sessionStorage.getItem("pontos") || "0");
    let jaVisitou = sessionStorage.getItem("visitou_noticia1");

    if (!jaVisitou) {
        pontos += 1;
        sessionStorage.setItem("pontos", pontos);
        sessionStorage.setItem("visitou_noticia1", "true");
    }

    document.getElementById("pts-valor").textContent = pontos;
}

function comentar() {
    let texto = document.getElementById("comentario").value;
    if (!texto) {
        alert("Escreva algo antes de comentar!");
    } else {
        alert("Comentário enviado!");
    }
}