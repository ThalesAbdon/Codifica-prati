/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/hr
exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/
const input = require('prompt-sync')()

function verifySpeed(speed) {
    if(speed > 80){
        const mulct = ((speed - 80) * 5)
        return 'você foi multado! deve pagar: ' + mulct + 'R$'
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

let car_speed = validateInput("Digite a velocidade do carro: ")
console.log(verifySpeed(car_speed))