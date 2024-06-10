/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/
const input = require('prompt-sync')()

function validateInput(msg){
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
    } while(isNaN(value))

    return Number(value)
}

function arithmeticProgression(term , n){
    if(n === 0 )return;
    term += ratio
    sum+= term
    console.log(term)
    arithmeticProgression(term, n - 1)
}

let term = validateInput('Digite o valor do termo: ') 
const ratio = validateInput('Digite o valor da razão: ')
let sum = 0;


arithmeticProgression(term, 10)
console.log(sum)