function calculaImc() {
    var peso = document.getElementById("peso");
    var altura = document.getElementById("altura");
    var tamanho = document.getElementsByName("tamanho");

    event.preventDefault();
    
    // Validando se as entradas de dados foram nulas
    if (peso.value.length == 0 || altura.value.length == 0) {
        window.alert("Todos os campos devem ser preenchidos obrigatóriamente...")
    }

    // Validando se houveram valores negativos para peso ou altura
    else if (peso.value < 0 || altura.value < 0) {
        window.alert("Insira somentes valores positivos aos campos...");
    }

    // Caso todas as entradas tenham sido coerentes, continuaremos com a execução do código...
    else {

	// Variável auxiliar criada só para guardar o valor original de altura caso esta precise ser convertida de cm para metros.
	var aux = altura.value;

        // Se a opção de "cm" estiver marcada (checada: checked), faremos a conversão para "mts" que é o padrão para cálculo IMC.
        if(tamanho[0].checked) {
            altura.value = altura.value / 100;
        }

        var img = document.createElement("img");
        var form = document.getElementById("formulario");

        var resultado = (peso.value / (altura.value * altura.value));

        window.alert(resultado.toFixed(2));

        if(resultado < 18.5) {
            img.src = "imagens/magreza.png";
        } else if(resultado <= 24.9) {
            img.src = "imagens/normal.png";
        } else if(resultado <= 29.9) {
            img.src = "imagens/sobrepeso.png";
        } else {
            img.src = "imagens/obesidade.png";
        }

        form.removeChild(form.lastChild);
        form.appendChild(img);

	// Ao final de tudo, altura precisa voltar pro seu valor original, independente desse valor ter sido ou não convertido.
	altura.value = aux;
    }
    

}