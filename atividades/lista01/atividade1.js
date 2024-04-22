/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
*/
const input = require('prompt-sync')();

function validarEntrada(mensagem) {
    let valor;
    do {
        valor = input(mensagem).trim(); 
        if (valor === '') {
            console.log("Por favor, digite um valor.");
        } else if (isNaN(valor)) {
            console.log("Por favor, insira um valor numérico.");
        }
    } while (valor === '' || isNaN(valor)); 

    return Number(valor);
}

const temperatura_celsius = validarEntrada("Digite a temperatura em graus Celsius: ");
const temperatura_fahrenheit = (temperatura_celsius * 1.8) + 32;
console.log("Temperatura em Fahrenheit:", temperatura_fahrenheit);
