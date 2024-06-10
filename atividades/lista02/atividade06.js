/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.
*/

const input = require('prompt-sync')()

function randomComputerNumber(){
    return (Math.floor((Math.random() * 5)) + 1);        
}


function validateInput(msg) {
    let value;
    do {
        value = input(msg).trim();
        if (value === "") {
            console.log("Por favor, insira um valor.");
            continue;
        }
        if (!Number.isInteger(Number(value)) || isNaN(value) || (Number(value) < 0 || Number(value) > 5)) {
            console.log("Por favor, escolha uma opção válida.");
        }
    } while (!Number.isInteger(Number(value)) || isNaN(value) || (Number(value) < 0 || Number(value) > 5) || value === "");

    return parseInt(value);
}

let computerNumber = randomComputerNumber()
let userNumber = validateInput("Advinhe o número, escolha um número entre 1 e 5: ")

if(userNumber === computerNumber){
    console.log("Você escolheu " + userNumber + " e o computador escolheu " + computerNumber)
    console.log("VOCÊ GANHOU!")
}else{
    console.log("Você escolheu " + userNumber + " e o computador escolheu " + computerNumber)
    console.log("VOCÊ PERDEU!")
}