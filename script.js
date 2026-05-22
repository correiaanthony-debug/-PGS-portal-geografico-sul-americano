
let sessao = JSON.parse(sessionStorage.getItem("pgs_sessao") || "null");
 
if (sessao) {

    let linkLogin = document.querySelector('a[href="login.html"]');
    if (linkLogin) {
        linkLogin.textContent = "Olá, " + sessao.nome;
        linkLogin.href = "#";
    }
 
    let linkCadastro = document.querySelector('a[href="cadastar.html"]');
    if (linkCadastro) linkCadastro.style.display = "none";
 
    let menu = document.querySelector("nav.menu");
    if (menu) {
        let btnSair = document.createElement("a");
        btnSair.textContent = "Sair";
        btnSair.href = "#";
        btnSair.style.color = "#c0552b";
        btnSair.onclick = function () {
            sessionStorage.removeItem("pgs_sessao");
            window.location.reload();
        };
        menu.appendChild(btnSair);
    }
}
 