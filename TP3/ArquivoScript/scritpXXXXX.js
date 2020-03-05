/*
Bruno de Moraes Mistro - 140495
Leonardo Plazezwski Falcão - 171700
*/
var notas = [15];
var media = 0, menorNota = 10, maiorNota = 0;

for (let i = 0; i < 15; i++) {

    do {
        notas[i] = Number(window.prompt(`Insira a nota do aluno ${i + 1}º Aluno:`)); 
    } while(isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10)
    
    media += (notas[i] / 15);

    if (notas[i] >= maiorNota) {
        maiorNota = notas[i];
    }
    
    if (notas[i] <= menorNota) {
        menorNota = notas[i];
    }
}

document.getElementsByTagName("h1")[1].innerText += (media.toFixed(1)).toString(); 
document.getElementsByTagName("h1")[2].innerText += maiorNota.toString(); 
document.getElementsByTagName("h1")[3].innerText += menorNota.toString(); 