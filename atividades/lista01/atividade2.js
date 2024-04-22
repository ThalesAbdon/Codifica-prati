/*
2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
*/

const input = require('prompt-sync')();

let quantidade_de_eleitores;
let quantidade_de_votos_brancos;
let quantidade_de_votos_nulos;
let quantidade_de_votos_validos;  

function validarEntrada(mensagem, limite_max_votos, quantidade_votos_atuais) {
    let valor;
    do {
        valor = input(mensagem).trim(); 
        if (valor === '') {
            console.log("Por favor, digite um valor válido.");
        } else if (isNaN(valor)) {
            console.log("Por favor, insira um valor numérico.");
        } else if (!Number.isInteger(Number(valor)) || Number(valor) < 0) {
            console.log("Por favor, insira um número inteiro positivo.");
        } else if (limite_max_votos !== undefined && valor > limite_max_votos) {
            console.log("O valor inserido deve ser menor ou igual a quantidade de eleitores -> quantidade de eleitores: " + limite_max_votos);
        } else if (quantidade_votos_atuais !== undefined && (Number(valor) + quantidade_votos_atuais) > limite_max_votos) {
            console.log("A soma dos votos não pode exceder a quantidade de eleitores");
        }
    } while (valor === '' || isNaN(valor) || (limite_max_votos !== undefined && valor > limite_max_votos)  || 
            (quantidade_votos_atuais !== undefined && (Number(valor) + quantidade_votos_atuais) > limite_max_votos) ||
            (!Number.isInteger(Number(valor)) || Number(valor) < 0)
        ); 
    return Number(valor);
}

function percentual(total,quantidade){
    return ((quantidade/total) * 100);
}

quantidade_de_eleitores = validarEntrada("Informe a quantidade de eleitores: ");
quantidade_de_votos_brancos = validarEntrada("Informe a quantidade de votos brancos: ", quantidade_de_eleitores);
quantidade_de_votos_nulos = validarEntrada("Informe a quantidade de votos nulos: ", quantidade_de_eleitores, quantidade_de_votos_brancos);
quantidade_de_votos_validos = validarEntrada("Informe a quantidade de votos válidos: ",quantidade_de_eleitores, 
(quantidade_de_votos_brancos + quantidade_de_votos_nulos));

console.clear();
console.log(percentual(quantidade_de_eleitores,quantidade_de_votos_brancos) + ' (percentual de votos brancos)' );
console.log(percentual(quantidade_de_eleitores,quantidade_de_votos_nulos) + ' (percentual de votos nulos)');
console.log(percentual(quantidade_de_eleitores,quantidade_de_votos_validos) + ' (percentual de votos validos)');


