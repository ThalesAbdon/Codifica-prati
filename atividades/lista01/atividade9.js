/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo.
*/

const input = require("prompt-sync")();
const numero = Number(input("Digite o código de origem do produto: "))
switch (numero) {
    case 1:
        console.log("Sul");
        break;
    case 2:
        console.log("Norte");
        break;
    case 3:
        console.log("Leste");
        break;
    case 4:
        console.log("Oeste");
        break;
    case 7: case 8: case 9:
         console.log("Sudeste");
        break;    
    case ((numero>=10 && numero<=20) ? numero : -1):
        console.log("Centro Oeste");
        break;
    case ((numero >= 25 && numero <= 50) || (numero >= 5 && numero <= 6) ? numero : -1):
        console.log("Nordeste");
        break;    
    default:
        console.log("Produto Importado");
}