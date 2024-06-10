/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/
const input = require('prompt-sync')()

function ticketPrice(dist){
    if(dist <= 200){
        return dist * 0.5
    }else{
        return dist * 0.45
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

let distance = validateInput('Por favor, informe a distância percorrida: ')
console.log('O preço da passagem é: ' + ticketPrice(distance))