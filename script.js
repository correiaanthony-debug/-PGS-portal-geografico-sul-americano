let sessao = JSON.parse(sessionStorage.getItem("pgs_sessao") || "null");

if (sessao) {
    let linkLogin = document.querySelector('a[href="login.html"]');
    if (linkLogin) {
        let icone = sessao.foto
            ? `<img src="${sessao.foto}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:6px;">`
            : `<img src="images.jpeg" style="width:28px;height:28px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:6px;">`;
        linkLogin.innerHTML = icone + sessao.nome;
        linkLogin.style.gap = "6px";
        linkLogin.href = "#";
        linkLogin.style.display = "flex";
        linkLogin.style.alignItems = "center";
    }

    let linkCadastro = document.querySelector('a[href="cadastar.html"]');
    if (linkCadastro) linkCadastro.style.display = "none";

    let menu = document.querySelector("nav.menu");
    if (menu) {
        let btnSair = document.createElement("a");
        btnSair.textContent = "Sair";
        btnSair.href = "#";
        btnSair.style.color = "#ff4d00";
        btnSair.onclick = function () {
            sessionStorage.removeItem("pgs_sessao");
            window.location.reload();
        };
        menu.appendChild(btnSair);
    }
}