/*
33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
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

function readMatrix(){
    let matrix = []
    for(i = 0; i < 3; i++){
        let row = []
        for(j = 0; j < 3; j++){
            let value = validateInput(`Digite o valor para a posição [${i + 1}][${j + 1}]:`);
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

function calculateSecondaryDiagonalAverage(matrix) {
    let sum = 0;
    for ( i = 0; i < 3; i++) {
        sum += Number(matrix[i][2 - i]);
    }
    return sum / 3;
}

function modifyMatrix(matrix, average) {
    for (let i = 0; i < 3; i++) {
        matrix[i][i] = (Number(matrix[i][i]) * average.toFixed(2)).toFixed(2);
    }
    return matrix;
}

function printMatrix(matrix) {
    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

let M = readMatrix();

console.log('Matriz Original:');
printMatrix(M);

let average = calculateSecondaryDiagonalAverage(M);
let modifiedM = modifyMatrix(M, average);

console.log('Matriz Modificada:');
printMatrix(modifiedM);
