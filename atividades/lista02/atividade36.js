/*
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
*/

const input = require('prompt-sync')();

function validateInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(value === "" || !Number.isInteger(Number(value)) || isNaN(value)){
            console.log('Por favor, digite um valor inteiro')
        }
    } while(value === "" || !Number.isInteger(Number(value)) || isNaN(value))

    return parseInt(value)
}

function countHits(templet,ticket){
    let hits = 0;
    for(i = 0; i < templet.length; i++){
        if(templet[i] === ticket[i]){
            hits++
        }
    }
    return hits
}

function readTemplet(){
    let templet = []
    for(i = 0; i < 13; i++){
        let number = validateInput('Digite um valor para o bilhete premiado: ')  
        templet.push(number)
    }
    return templet
}

templet = readTemplet()
for (let punter = 1; punter <= 100; punter++) {
    console.log("- - - Apostador - - -", punter + ":");
    const ticket = [];
    for (let i = 0; i < 13; i++) {
        const resposta = validateInput(`Resposta ${i + 1}: `);
        ticket.push(resposta);
    }

    const numberOfHits = countHits(templet, ticket);

    console.log("Número de acertos:", numberOfHits);
    if (numberOfHits === 13) {
        console.log("Parabéns, você foi o GANHADOR!");
    }
}