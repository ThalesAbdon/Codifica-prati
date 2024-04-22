/*
4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
*/
const input = require('prompt-sync')();

function validarEntrada(mensagem) {
    let valor;
    do {
        valor = parseFloat(input(mensagem).trim()); 
        if (isNaN(valor)) {
            console.log("Por favor, insira um valor numérico.");
        } else if (valor < 0 || valor > 10) {
            console.log("Por favor, insira um valor entre 0 e 10.");
        }
    } while (isNaN(valor) || valor < 0 || valor > 10); 

    return valor;
}

const primeira_nota = validarEntrada("Digite a primeira nota: ");
const segunda_nota = validarEntrada("Digite a segunda nota: ");

if(((primeira_nota + segunda_nota) / 2) >= 6){
    console.log("PARABÉNS! Você foi aprovado")
}