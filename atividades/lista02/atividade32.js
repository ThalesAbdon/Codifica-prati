/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/

const input = require('prompt-sync')()

function validateInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(!Number(value) || isNaN(value)){
            console.log('Por favor, digite um Número')
        }
    } while(!Number(value) || isNaN(value))

    return value
}

function readMatrix() {
    let matrix = [];
    for (let i = 0; i < 12; i++) {
        let row = [];
        for (let j = 0; j < 13; j++) {
            let value = validateInput(`Digite o valor para a posição [${i + 1}][${j + 1}]:`);
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

function maxAbsValue(row) {
    return Math.max(...row.map(Math.abs));
}

function modifyMatrix(matrix) {
    let modifiedMatrix = [];
    for (let i = 0; i < 12; i++) {
        let maxAbs = maxAbsValue(matrix[i]);
        let newRow = matrix[i].map(value => value / maxAbs);
        modifiedMatrix.push(newRow);
    }
    return modifiedMatrix;
}

function printMatrix(matrix) {
    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}


let M = readMatrix();

console.log('Matriz Original:');
printMatrix(M);

let modifiedM = modifyMatrix(M);

console.log('Matriz Modificada:');
printMatrix(modifiedM);