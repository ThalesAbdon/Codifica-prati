/*
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/
const input = require('prompt-sync')();

function validarEntrada(mensagem) {
    let valor;
    do {
        valor = input(mensagem).trim(); 
        if (valor === '') {
            console.log("Por favor, digite um valor.");
        } else if (!Number.isInteger(Number(valor))) {
            console.log("Por favor, insira um valor numérico inteiro");
        }
    } while (valor === '' || !Number.isInteger(Number(valor))); 

    return Number(valor);
}

while (true) {
    const valor = validarEntrada("Digite um valor inteiro: ");
    
    if (valor <= 0 || isNaN(valor)) {
        console.log("Encerrando o programa...");
        break;
    }

    if (valor % 2 === 0) {
        console.log(`${valor} é PAR.`);
    } else {
        console.log(`${valor} é ÍMPAR.`);
    }
}