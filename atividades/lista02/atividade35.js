/*
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/

const input = require('prompt-sync')();

function validateInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(value === "" || !Number.isInteger(Number(value)) || isNaN(value)){
            console.log('Por favor, digite um valor inteiro')
        }
    } while(value === "" || !Number.isInteger(Number(value)) || isNaN(value))

    return parseInt(value)
}

let evenValues = []
let oddValues = []

for(i = 0; i < 30; i++){

    if(evenValues.length === 5 ){
        console.log(evenValues)
        evenValues = []
    }

    if(oddValues.length === 5 ){
        console.log(oddValues)
        oddValues = []
    }

    const value = validateInput('Digite um valor: ')

    if( value % 2 === 0){
        evenValues.push(value)
    }else{
        oddValues.push(value)
    }
}

console.log(evenValues)
console.log(oddValues)