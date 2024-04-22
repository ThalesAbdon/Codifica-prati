/*
5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
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
}else{
    console.log("Você foi REPROVADO! Estude mais")
}