function comentar() {
    let texto = document.getElementById("comentario").value;
    if (!texto) {
        alert("Escreva algo antes de comentar!");
    } else {
        alert("Comentário enviado!");
    }
}