/*
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

const input = require('prompt-sync')();

function validarEntrada(mensagem) {
    let valor;
    do {
        valor = input(mensagem).trim();
        if (!Number.isInteger(Number(valor))) {
            console.log("Por favor, digite um número inteiro válido.");
        }
    } while (!Number.isInteger(Number(valor)));

    return parseInt(valor);
}

let primeiroInteiro = validarEntrada("Digite o primeiro inteiro: ");
let segundoInteiro = validarEntrada("Digite o segundo inteiro: ");
let terceiroInteiro = validarEntrada("Digite o terceiro inteiro: ");
let quartoInteiro = input("Digita qualquer coisa, essa variável vai ser a soma dos valores originais: ")

quartoInteiro = primeiroInteiro + segundoInteiro + terceiroInteiro;
primeiroInteiro += 25;
segundoInteiro *= 3;
terceiroInteiro *= 0.12;

console.log("Resultado da operação 1:", primeiroInteiro);
console.log("Resultado da operação 2:", segundoInteiro);
console.log("Resultado da operação 3:", terceiroInteiro);
console.log("Resultado da operação 4:", quartoInteiro);
