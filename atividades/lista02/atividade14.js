/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

const input = require('prompt-sync')()
let arr = []

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

for(i = 0; i < 7; i++){
    arr[i] = validateNameInput('Digite o nome da pessoa: ')
}


console.log(arr)