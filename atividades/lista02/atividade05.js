/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

const input = require('prompt-sync')()

function winner(user,bot){
    if( (user === 'Pedra' && bot === 'Tesoura') || (user === 'Papel' && bot === 'Pedra') || (user === 'Tesoura' && bot === 'Papel')){
        score_user += 1
        console.log('O computador escolheu ' + bot + ' e você escolheu ' + user )
        console.log('VOCÊ GANHOU!')
    }else if((bot === 'Pedra' && user === 'Tesoura') || (bot === 'Papel' && user === 'Pedra') || (bot === 'Tesoura' && user === 'Papel')){
        score_bot += 1
        console.log('O computador escolheu ' + bot + ' e você escolheu ' + user )
        console.log('VOCÊ PERDEU!')
    }else if(user === -1){
        console.log("Jogo foi encerrado!")
        loop = false
    }else{
        console.log('O computador escolheu ' + bot + ' e você escolheu ' + user )
        console.log('EMPATE!')
    }
}

function randomBotChoice(){
    const bot_option = Math.floor((Math.random() * 3) + 1);
    return choice(bot_option)    
}

function choice(user){
    switch(user){
        case 0:
            return -1
        case 1: 
            return 'Pedra' 
        case 2:
            return 'Papel'
        case 3: 
            return 'Tesoura'   
        default:
            break;    
    }
}


function validateInput(msg) {
    let value;
    do {
        value = input(msg).trim();
        if (value === "") {
            console.log("Por favor, insira um valor.");
            continue;
        }
        if (!Number.isInteger(Number(value)) || isNaN(value) || (Number(value) < 0 || Number(value) > 3)) {
            console.log("Por favor, escolha uma opção válida.");
        }
    } while (!Number.isInteger(Number(value)) || isNaN(value) || (Number(value) < 0 || Number(value) > 3) || value === "");

    return parseInt(value);
}


let loop = true;
let score_user = 0;
let score_bot = 0;
while (loop){
console.log("------------JOKENPO------------")
console.log("SCORE:" + " Você " + score_user + 'x' + score_bot + ' Computador')
console.log("\n 0 - Para sair \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura \n")
console.log("-------------------------------")

let user_choice = choice(validateInput("Escolha uma opção: "))
let bot_choice = randomBotChoice()

winner(user_choice, bot_choice)

if(loop === true){
input("Pressione Enter para jogar novamente...");
console.clear()
}
}