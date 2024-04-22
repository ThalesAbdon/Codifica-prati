/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
const input = require('prompt-sync')();

function verificarTriangulo(A, B, C) {
    if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
            console.log("Triângulo equilátero.");
        } else if (A === B || A === C || B === C) {
            console.log("Triângulo isósceles.");
        } else {
            console.log("Triângulo escaleno.");
        }
    } else {
        console.log("Os lados fornecidos não formam um triângulo.");
    }
}

function validarEntrada(mensagem) {
    let numero;
    do {
        numero = parseFloat(input(mensagem));
        if (isNaN(numero)) {
            console.log("Por favor, insira um número válido.");
        }
    } while (isNaN(numero));
    return numero;
}

const ladoA = validarEntrada("Digite o valor do lado A do triângulo:");
const ladoB = validarEntrada("Digite o valor do lado B do triângulo:");
const ladoC = validarEntrada("Digite o valor do lado C do triângulo:");

verificarTriangulo(ladoA, ladoB, ladoC);
