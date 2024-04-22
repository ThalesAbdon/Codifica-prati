/*
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

const input = require('prompt-sync')();
let soma = 0;
let somaPesos = 0;

function validarEntrada(mensagem) {
    let valor;
    do {
        valor = parseFloat(input(mensagem).trim()); 
        if (isNaN(valor)) {
            console.log("Por favor, insira um valor numérico válido.");
        }
    } while (isNaN(valor)); 

    return valor;
}

let numero = validarEntrada("Digite um número decimal (digite 0 para terminar): ");
let peso;

while (numero !== 0) {
    peso = validarEntrada("Digite o peso deste número: ");
    soma += numero * peso;
    somaPesos += peso; 
    numero = validarEntrada("Digite um número decimal (digite 0 para terminar): ");
}

if (somaPesos > 0) {
    const mediaPonderada = soma / somaPesos;
    console.log("A média ponderada dos números digitados é:", mediaPonderada);
} else {
    console.log("Nenhum número foi digitado para calcular a média ponderada.");
}
