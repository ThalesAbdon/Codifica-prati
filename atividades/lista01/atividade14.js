/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const input = require('prompt-sync')();
let soma = 0;
let quantidade = 0;

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

while (numero !== 0) {
    soma += numero;
    quantidade++;
    numero = validarEntrada("Digite um número decimal (digite 0 para terminar): ");
}


if (quantidade > 0) {
    const media = soma / quantidade;
    console.log("A média dos números digitados é:", media);
} else {
    console.log("Nenhum número foi digitado para calcular a média.");
}
