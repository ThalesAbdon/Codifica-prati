/*
Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/ 
const input = require('prompt-sync')()
let N

for(let i = 0; i < 5; i++){
    let entrada;
    do {
        entrada = input('Digite o número: ').trim()
        if (isNaN(entrada) || entrada === '') {
            console.log("Por favor, digite um número válido.");
        }
    } while (isNaN(entrada) || entrada === '');

    N = Number(entrada)

    for(let j = 1; j <= N; j++){
        console.log(j + ' x ' + N + ' = ' + (N * j))
    }
    console.log('--------------------------------------')
}