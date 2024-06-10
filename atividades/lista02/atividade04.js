/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

const input = require('prompt-sync')()

function isTriangle(sideA,sideB,sideC){
    if( (sideA < (sideB + sideC)) && (sideB < (sideA + sideC)) && (sideC < (sideA + sideB)) ){
        return 'É possível formar um triângulo'
    }else {
        return 'Não é possível formar um triângulo'
    }
}

function validateInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) <= 0){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) <= 0)

    return parseInt(value)
}

let straight_segmentA = validateInput("Digite o tamanho do primeiro segmento de reta: ")
let straight_segmentB = validateInput("Digite o tamanho do segundo segmento de reta: ")
let straight_segmentC = validateInput("Digite o tamanho do terceiro segmento de reta: ")

console.log(isTriangle(straight_segmentA, straight_segmentB, straight_segmentC))