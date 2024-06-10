/*
Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/
const input = require('prompt-sync')()

let numbers = []

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

function validateProceedInput(msg){
    let value;
    do{
        value = input(msg).trim().toUpperCase();
        if(value !== 'S' && value !== 'N'){
            console.log('Por favor, digite S para sim ou N para não')
        }
    }while(value !== 'S' && value !== 'N')
    return value
}


do{
    let number = validateNumbersInput("Digite um número: ")
    numbers.push(number);
    let proceed = validateProceedInput("Deseja continuar? (S para sim, N para não): ").toUpperCase();
    if (proceed !== 'S') {
        break;
    }


}while(true)

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
let avg = (sum / numbers.length) || 0
let even = numbers.filter((num) => num % 2 === 0)
console.log(numbers)
console.log(sum)
console.log(Math.min(...numbers))
console.log(avg)
console.log(even.length);