/*31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.*/

const input = require('prompt-sync')()

function validateInput(msg) {
    let value;
    do {
        value = input(msg).trim();
        if(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) <= 0){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) <= 0)

    return parseInt(value)
}

function processMatrix(A, V) {
    let count = 0;
    let X = [];
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (V[i][j] === A) {
                count++;
            } else {
                X.push(V[i][j]);
            }
        }
    }
    console.log(`Número de elementos iguais a ${A}: ${count}`);
    console.log('Matriz X contendo todos os elementos de V diferentes de A:');
    console.log(X);
}

function readMatrix() {
    let matrix = [];
    for (let i = 0; i < 30; i++) {
        let row = [];
        for (let j = 0; j < 30; j++) {
            row.push(validateInput((`Digite o valor para a posição [${i+1}][${j+1}]: `)));
        }
        matrix.push(row);
    }
    return matrix;
}

let A = validateInput(("Digite um número inteiro A: "));
let V = readMatrix();

console.log('Matriz V:');
V.forEach(row => console.log(row));

processMatrix(A, V);