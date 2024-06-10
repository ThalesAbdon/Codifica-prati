/*
28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
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
for (let i = 0; i < 10; i++) {
    let linha = [];
    for (let j = 0; j < 10; j++) {
        linha.push(validateInput(`Digite o valor para a posição [${i + 1}][${j + 1}]`));
    }
    M.push(linha);
}

let sumAboveDiagonal = 0;
let sumBelowDiagonal = 0;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i < j) {
            sumAboveDiagonal += M[i][j];
        } else if (i > j) {
            sumBelowDiagonal += M[i][j];
        }
    }
}

console.log("Soma dos elementos acima da diagonal principal:", sumAboveDiagonal);
console.log("Soma dos elementos abaixo da diagonal principal:", sumBelowDiagonal);