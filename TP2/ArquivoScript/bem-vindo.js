function verificaFrete() {
    
    var preco = document.getElementById("preco");
    
    if (preco.value.length == 0) {
        window.alert("Por favor insira um valor para o preço...");
    }
    else if (preco.value <= 0) {
        window.alert("Por favor insira um valor válido...");
    }
    
    else {
        window.confirm("Antes de prosseguir, você está bem?")
        var frete = document.createElement("p");
        var caixa = document.getElementById("caixa");
        
        caixa.removeChild(caixa.lastChild);
          
        if (preco.value >= 100) {
            frete.innerText = "Valor do frete: R$0,00 GRÁTIS";
        }

        else {
            frete.innerText = `Valor do frete: R$${Number(preco.value) * 0.1}`
        }

        caixa.appendChild(frete);
    }
}

function media() {
    var total = parseFloat(window.prompt("Quantidade de alunos:"));
    var mediaTotal = [];
    var nota1;
    var nota2;

    for(var i = 0; i < total; i++) {
        nota1 = parseFloat(window.prompt(`Informe a P1 do ${i+1}º Aluno:`));
        nota2 = parseFloat(window.prompt(`Informe a P2 do ${i+1}º Aluno:`));
        mediaTotal[i] = (nota1+(nota2*2))/3;
    }

    var texto = document.getElementById("notas");

    for (let i = 0; i < total; i++) {
        texto.innerText += `Média Aluno ${i + 1}: ${Math.round(mediaTotal[i])} \n`;
    }   
}