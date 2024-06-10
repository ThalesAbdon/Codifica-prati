/*
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
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
    for(i = 0; i < 50; i++){
        let row = []
        for(j = 0; j < 50; j++){
            let value = validateInput(`Digite o valor para a posição [${i + 1}][${j + 1}]:`);
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

function multiplyDiagonal(matriz) {
    const len = matriz.length;
    for (let i = 0; i < len; i++) {
        const elemDiagonal = matriz[i][i];
        for (let j = 0; j < len; j++) {
            matriz[i][j] *= elemDiagonal;
        }
    }

    return matriz;
}

let M = readMatrix();
console.log(multiplyDiagonal(M))