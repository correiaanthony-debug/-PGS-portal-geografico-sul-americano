const sessao = JSON.parse(sessionStorage.getItem("pgs_sessao") || "null");

if (!sessao) {
    alert("Você precisa estar logado para ver seu certificado!");
    window.location.href = "login.html";
}

const pontos = parseInt(localStorage.getItem("pontos") || "0");
if (pontos < 4) {
    alert("Você ainda não tem pontos suficientes para acessar o certificado!");
    window.location.href = "index.html";
}

document.getElementById("nome-usuario").textContent = sessao ? sessao.nome : "Leitor";

const hoje = new Date();
const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    day: "2-digit", month: "long", year: "numeric"
});
document.getElementById("data-emissao").textContent = dataFormatada;