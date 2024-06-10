/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

const input = require('prompt-sync')()
const names = []
const ages = []
const minor = []

function validateAgeInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) <= 0){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) <= 0)

    return parseInt(value)
}

function validateNameInput(msg){
    let value;
    do{
        value = input(msg).trim();
        if(!validateName(value)) {
            console.log("Por favor, digite um nome válido!")
        }
    }while(!validateName(value))

    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()

    return value;
}

function validateName(name){
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
  return regex.test(name);
}

for(i = 0; i < 9; i++){
   names.push(validateNameInput('Digite o nome da pessoa: '))
   ages.push(validateAgeInput('Digite a idade da pessoa: '))
}

for(j = 0; j < ages.length; j++){
    if(ages[j] < 18){
        minor.push([names[j], ages[j]])
    }
}
console.log("a coluna 0 representa os nomes das pessoas, a coluna 1 representa as idades das pessoas")
console.table(minor)