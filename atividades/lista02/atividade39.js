/*
39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

const input = require('prompt-sync')()

function validateVectorInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if (isNaN(value)) {
            console.log("Digite um número válido!");
            continue;
        }
    } while(isNaN(value))

    return Number(value)
}

function readVector(){
    let vector= []
    for(i = 0; i < 100; i++){
        let number = validateVectorInput(`Digite o número para o endereço de memória ${i}:`)  
        vector.push(number)
    }
    return vector
}

let vector = readVector()
let compress_vector = vector.filter(n => n > 0)
console.log(compress_vector)