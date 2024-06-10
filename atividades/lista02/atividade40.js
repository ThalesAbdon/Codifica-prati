/*
40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
*/

const input = require('prompt-sync')()

function validateVectorInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(value === "" || !Number.isInteger(Number(value)) || isNaN(value)){
            console.log('Por favor, digite um valor inteiro')
        }
    } while(value === "" || !Number.isInteger(Number(value)) || isNaN(value))

    return parseInt(value)
}

function equalArrs(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function verifyBets(result,bets) {
    bets.forEach((bet, index) => {
        if (equalArrs(result, bet)) {
            console.log(`Aposta de indice ${index}: Ganhador`);
        }
    });
}

function readFiveElements(){
    let vector= []
    for(i = 0; i < 5; i++){
        let number = validateVectorInput(`Digite o número para o endereço de memória ${i}:`)  
        vector.push(number)
    }
    return vector
}

function fiftyBets(){
    let bets = []
    for(j = 0; j < 50; j++){
        let bet = readFiveElements()
        bets.push(bet)
    }
    return bets
}



let loto_result= readFiveElements()
console.log("\n--- APOSTAS --- \n")
let bets = fiftyBets()
verifyBets(loto_result,bets)


