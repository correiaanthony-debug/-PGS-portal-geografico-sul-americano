let sessao = JSON.parse(sessionStorage.getItem("pgs_sessao") || "null");

if (sessao) {
    let linkLogin = document.querySelector('a[href="login.html"]');
    if (linkLogin) {
        let icone = sessao.foto
            ? `<img src="${sessao.foto}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:6px;">`
            : `<img src="images.jpeg" style="width:28px;height:28px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:6px;">`;
        linkLogin.innerHTML = icone + sessao.nome;
        linkLogin.href = "#";
        linkLogin.style.display = "flex";
        linkLogin.style.alignItems = "center";
        linkLogin.style.gap = "6px";
        linkLogin.classList.add("sem-hover");
    }

    let linkCadastro = document.querySelector('a[href="cadastar.html"]');
    if (linkCadastro) {
        linkCadastro.textContent = "Sair";
        linkCadastro.href = "#";
        linkCadastro.onclick = function () {
            sessionStorage.removeItem("pgs_sessao");
            window.location.reload();
        };
    }
}

let pontos = parseInt(localStorage.getItem("pontos") || "0");
let cardCert = document.getElementById("card-certificado");

if (cardCert) {
    if (pontos >= 4) {
        cardCert.classList.add("desbloqueado");
        cardCert.style.cursor = "pointer";
        cardCert.onclick = function () {
            window.location.href = "certificado.html";
        };
    } else {
        let lockMsg = cardCert.querySelector(".lock-msg");
        if (lockMsg) {
            lockMsg.textContent = `Leia mais ${4 - pontos} notícia(s) para desbloquear`;
        }
    }
}