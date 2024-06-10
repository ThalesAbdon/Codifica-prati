/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const input = require('prompt-sync')()
let timeArr = []

function validateTime(time){
    const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    return regex.test(time);
}

function validateTimeInput(msg){
    let time;
    do {
        time = input(msg).trim();

        if (!validateTime(time)) {
            console.log("Horário inválido! Por favor, digite no formato HH:MM:SS.");
        }
    } while (!validateTime(time));
    return time
}

for( i = 0; i < 5; i++){
    timeArr[i] = validateTimeInput('Digite um horário(formato HH.MM.SS)')
}

console.log(timeArr)