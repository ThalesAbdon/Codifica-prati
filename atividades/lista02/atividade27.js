/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
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
for (let i = 0; i < 6; i++) {
    let linha = [];
    for (let j = 0; j < 6; j++) {
        linha.push(validateInput(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
    }
    M.push(linha);
}

let A = validateInput("Digite o valor A para multiplicar a matriz: ");
let V = new Array(36);

let index = 0;
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        V[index] = M[i][j] * A;
        index++;
    }
}

console.log("Vetor V: ");
console.log(V);