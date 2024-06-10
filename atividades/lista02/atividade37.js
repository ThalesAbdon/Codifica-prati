/*
37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

const input = require('prompt-sync')();

function validateInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(value.length !== 1){
            console.log('Por favor, digite um caractere!')
        }
    } while(value.length !== 1)

    return value
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
    let G = []
    for(i = 0; i < 20; i++){
        let number = validateInput(`Digite a resposta  da questão ${i + 1}: `)  
        G.push(number)
    }
    return G
}

templet = readTemplet()
for (let student = 1; student <= 50; student++) {
    console.log("- - - Estudante - - -", student + ":");
    const ticket = [];
    for (let i = 0; i < 20; i++) {
        const resposta = validateInput(`Resposta da questão ${i + 1}: `);
        ticket.push(resposta);
    }

    const numberOfHits = countHits(templet, ticket);

    console.log("Número de acertos:", numberOfHits);
    if (numberOfHits >+ 12) {
        console.log("APROVADO");
    } else{
        console.log("REPROVADO")
    }
}