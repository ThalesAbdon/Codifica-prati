/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

const input = require('prompt-sync')()

function calculateLostDays(cigarettes_per_day, years_of_smoking){
    if(years_of_smoking === 0){
        return (cigarettes_per_day * 10) / 1440
    }else{
        return ( ((cigarettes_per_day * (365 * years_of_smoking)) * 10) / 1440)
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

let cigarettes_per_day = validateInput("Digite a quantidade de cigarros fumados por dia: ")
let years_of_smoking = validateInput("Digite a quantidade de ano(s) em que teve o hábito de fumar: ")

console.log("Dias perdidos: " + Math.round(calculateLostDays(cigarettes_per_day,years_of_smoking)))