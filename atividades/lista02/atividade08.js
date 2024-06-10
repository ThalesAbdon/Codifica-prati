/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

const input = require('prompt-sync')()

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

function calclateMoney(points){
    return points * 0.05;
}

function calculatePoints(hours){
    if(hours <= 10){
       return hours * 2
    }else if(hours <= 20){
        return hours * 5
    }else {
        return hours * 10
    }
}
let hours_activity = validateInput("Digite a quantidade de horas de atividade fisica foram realizadas no mês: ")
let points = calculatePoints(hours_activity)
let money = calclateMoney(points)
console.log('Total de pontos: ' + points)
console.log('Dinheiro ganho: ' + money)