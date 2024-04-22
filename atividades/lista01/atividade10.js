//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const input = require("prompt-sync")();

function validarEntrada(mensagem) {
    let valor;
    do {
        valor = input(mensagem).trim(); 
        if (valor === '') {
            console.log("Por favor, digite um valor.");
        } else if (!Number.isInteger(Number(valor))) {
            console.log("Por favor, insira um valor numérico inteiro.");
        }
    } while (valor === '' || !Number.isInteger(Number(valor))); 

    return Number(valor);
}

const numero = validarEntrada("Digite um número inteiro: ");

for(i = 0; i < 10; i++){
    console.log(numero)
}