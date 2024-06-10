/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
*/
const input = require('prompt-sync')()
function validateNumbersInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if (value === "") {
            console.log("Por favor, insira um valor.");
            continue;
        }
        if(isNaN(value)){
            console.log('Por favor, digite um número.')
        }
    } while(isNaN(value) || value === "")

    return Number(value)
}
let arr = []
let arrEven = []
for(i = 0; i < 10; i++){
    arr[i] = validateNumbersInput('Digite um número: ')
    if(arr[i] % 2 === 0){
        arrEven.push([arr[i], i])
    } 
}

console.log("a coluna 0 representa os números pares, a coluna 1 representa as posições onde o número está armazenado")
console.table(arrEven)