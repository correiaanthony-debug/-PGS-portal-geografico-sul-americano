const sessaoAtual = JSON.parse(sessionStorage.getItem("pgs_sessao") || "null");

if (sessaoAtual) {
    let pontos = parseInt(localStorage.getItem("pontos") || "0");
    let jaVisitou = localStorage.getItem("visitou_noticia2b");

    if (!jaVisitou) {
        pontos += 1;
        localStorage.setItem("pontos", pontos);
        localStorage.setItem("visitou_noticia2b", "true");
    }

    document.getElementById("pts-valor").textContent = pontos;
}