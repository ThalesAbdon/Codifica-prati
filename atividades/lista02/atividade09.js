/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/
const input = require('prompt-sync')()

let employees = [];
let totalSalaryMan = 0;
let totalSalaryWoman = 0;

function validateWageInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if (isNaN(value) || value <= 0) {
            console.log("Salário inválido. Por favor, digite um valor numérico maior que zero.");
            continue;
        }
    } while(isNaN(value) || value <= 0)

    return Number(value)
}

function validateGenderInput(msg){
    let value;
    do {
        value = input(msg).trim().toUpperCase();
        if (value !== 'M' && value !== 'F') {
            console.log("Sexo inválido. Por favor, digite M para masculino ou F para feminino.");
            continue;
        }    
    } while(value !== 'M' && value !== 'F')
    
    return value
}

while (true) {
    let wage = validateWageInput("Digite o salário do funcionário:");
    let gender = validateGenderInput("Digite o sexo do funcionário (M para masculino, F para feminino):").toUpperCase();

    if (gender === 'M') {
        totalSalaryMan += wage;
    } else if (gender === 'F') {
        totalSalaryWoman += wage;
    } 

    employees.push({ wage, gender });

    let proceed = input("Deseja inserir dados de mais funcionários? (S ou s para sim): ").toUpperCase();
    if (proceed !== 'S') {
        break;
    }
}

console.log("Lista de funcionários:", employees);
console.log("Total pago aos homens: R$ " + totalSalaryMan.toFixed(2));
console.log("Total pago às mulheres: R$ " + totalSalaryWoman.toFixed(2));
