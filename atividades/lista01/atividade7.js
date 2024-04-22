/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const input = require("prompt-sync")();

function validarEntrada(mensagem) {
    let valor;
    do {
        valor = input(mensagem).trim(); 
        if (valor === '') {
            console.log("Por favor, digite um valor.");
        } else if (isNaN(valor)) {
            console.log("Por favor, insira um valor numérico.");
        } else if ( valor < 0){
            console.log("Por favor, digite um inteiro positivo.")
        }
    } while (valor === '' || isNaN(valor) || valor < 0); 

    return Number(valor);
}

const quantidade_macas = validarEntrada("Digite a quantidade de maçãs: ");
if(quantidade_macas < 12){
    console.log("Valor total da compra: " + (quantidade_macas * 0.30))
}else{
    console.log("Valor total da compra: " + (quantidade_macas * 0.25))
}