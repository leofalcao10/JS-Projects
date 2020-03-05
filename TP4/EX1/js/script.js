function calculaMedia() {
    event.preventDefault();

    var nome = document.getElementById("nome")
    var falta = document.getElementById("falta");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var tp = document.getElementById("tp");

    // validando campos nulos
    if (nome.value.length == 0 || falta.value.length == 0 || p1.value.length == 0 || p2.value.length == 0 || tp.value.length == 0) {
        window.alert("Todos os campos devem ser preenchidos obrigatóriamente...")
    }

    // validando se todas as notas estão entre 0 e 10.
    else if ((p1.value < 0 || p1.value > 10) || (p2.value < 0 || p2.value > 10) || (tp.value < 0 || tp.value > 10)) {
        window.alert("As notas devem estar entre 0 e 10...");
    }

    // Caso todas as entradas sejam válidas, daremos sequência a execução do código...
    else {

        var img = document.createElement("img");
        var form = document.getElementById("formulario");

        // conferindo se o aluno ultrapassou o limite de faltas
        if(Number(falta.value) > 17) {
            img.setAttribute("src", "imagens/reprovacao.png");
            window.alert("Aluno reprovado por faltas...");
        }

        else {
            // Armazenando a média
            var media = ((((2 * p1.value) + (3 * p2.value)) / 5) *  0.7) + (0.3 * tp.value);

            // Exibindo a nota através de um alerta.
            window.alert("Média: " + media.toFixed(2));

            // Decidindo qual imagem será exibida na tela conforme a média calculada.
            if (media >= 7) {
               img.setAttribute("src", "imagens/aprovacao.png");
            }

            else if (media < 3) {
                img.setAttribute("src", "imagens/reprovacao.png");
            }

            else {
                img.setAttribute("src", "imagens/estudemais.jpg");
            }
        }
        form.removeChild(form.lastChild);
        form.appendChild(img);
    }
}