function entrar() {
    let nome   = document.getElementById("nome").value;
    let email  = document.getElementById("email").value;
    let emailc = document.getElementById("emailc").value;
    let senha  = document.getElementById("senha").value;
    let senhac = document.getElementById("senhac").value;
    let numero = document.getElementById("numero").value;

    if (!nome || !email || !numero || !senha) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    if (!email.includes("@")) {
        alert("Digite um e-mail válido");
        return;
    }

    if (email !== emailc) {
        alert("Os e-mails não coincidem");
        return;
    }

    if (senha !== senhac) {
        alert("As senhas não coincidem");
        return;
    }

    // Pega a foto se o usuário escolheu uma
    let fotoInput = document.getElementById("foto");
    if (fotoInput && fotoInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            salvarCadastro(nome, email, senha, numero, e.target.result);
        };
        reader.readAsDataURL(fotoInput.files[0]);
    } else {
        salvarCadastro(nome, email, senha, numero, null);
    }
}

function salvarCadastro(nome, email, senha, numero, foto) {
    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("usuarioSenha", senha);
    localStorage.setItem("usuarioNome", nome);
    localStorage.setItem("usuarioFoto", foto || "");
    alert("Cadastro realizado!");
    window.location.href = "login.html";
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

// Preview da foto antes de cadastrar
function previewFoto() {
    let input = document.getElementById("foto");
    let preview = document.getElementById("foto-preview");
    if (!preview) return;
    if (input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(input.files[0]);
    }
}