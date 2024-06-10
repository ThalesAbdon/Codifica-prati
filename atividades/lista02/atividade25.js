/*
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
*/

const input = require('prompt-sync')()

let matrix = [];
for (let i = 0; i < 15; i++) {
    let row = [];
    for (let j = 0; j < 20; j++) {
        // Solicitando ao usuário para digitar o valor
        let value = parseFloat(input(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
        while (isNaN(value)) {
            value = parseFloat(input(`Entrada inválida. Por favor, digite um número válido para a posição [${i + 1}][${j + 1}]: `));
        }
        row.push(value);
    }
    matrix.push(row);
}

let sumColumns = new Array(20).fill(0);
for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 15; i++) {
        sumColumns[j] += matrix[i][j];
    }
}

for (let j = 0; j < 20; j++) {
    console.log(`Soma da coluna ${j + 1}: ${sumColumns[j].toFixed(2)}`);
}