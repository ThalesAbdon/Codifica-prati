/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

const input = require('prompt-sync')()
function validateWageInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) <= 0){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) <= 0)

    return parseInt(value)
}

function validateNameInput(msg){
    let value;
    do{
        value = input(msg).trim();
        if(!validateName(value)) {
            console.log("Por favor, digite um nome válido!")
        }
    }while(!validateName(value))

    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()

    return value;
}

function validateName(name){
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
  return regex.test(name);
}

function Employee(name,role,wage){
    this.name = name;
    this.role = role;
    this.wage = wage
}


let employee1 = new Employee(validateNameInput('Digite o nome do funcionário: '), validateNameInput('Digite o cargo do funcionário: '), validateWageInput('Digite o salário do funcionário: '))
console.log(employee1.name + ' que está no cargo de ' + employee1.role + ' e recebe ' + employee1.wage + ' é o novo funcionário!')