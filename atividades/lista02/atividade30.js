/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/

const input = require('prompt-sync')()

function validateInput(msg) {
    let value = parseFloat(input(msg));
    while (isNaN(value)) {
        value = parseFloat(input("Entrada inválida. " + msg));
    }
    return value;
}

let M = [];
for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
        row.push(validateInput(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
    }
    M.push(row);
}

let SL = new Array(5).fill(0);
let SC = new Array(5).fill(0);

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        SL[i] += M[i][j];
        SC[j] += M[i][j];
    }
}

console.log("Matriz M:");
for (let i = 0; i < 5; i++) {
    console.log(M[i]);
}

console.log("Vetor SL (representa as Somas das Linhas):");
console.table(SL);

console.log("Vetor SC (Somas das Colunas):");
console.table(SC);