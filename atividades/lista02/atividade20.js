/* 
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/
const input = require('prompt-sync')()
let employeeArr = []

function validatePayInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(!(Number(value)) || isNaN(value) || Number(value) <= 0){
            console.log('Por favor, digite um salário válido!')
        }
    } while(!(Number(value)) || isNaN(value) || Number(value) <= 0)

    return value
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

function validateRegistrationInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(employeeArr.find(({ registration }) => registration === Number(value))){
            console.log('Essa matricula já existe! Por favor, digite uma nova matricula')
        }
        if(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) < 0){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) < 0 || employeeArr.find(({ registration }) => registration === Number(value)))

    return parseInt(value)
}

class Employee {
    constructor(registration, name, gross_pay, inss_deduction, net_pay) {
        this.registration = registration;
        this.name = name;
        this.gross_pay = gross_pay;
        this.inss_deduction = inss_deduction;
        this.net_pay = net_pay;
    }
}

function registerEmployee(){
    const registration = validateRegistrationInput('Digite a matrícula: ')
    const name = validateNameInput('Digite o nome do funcionário: ')
    const gross_pay = validatePayInput('Digite o salário do funcionário: ')
    const inss_deduction = gross_pay * 0.12
    const net_pay = gross_pay - inss_deduction
    return new Employee(registration,name,gross_pay, inss_deduction, net_pay)
}

for(i = 0; i < 80; i++){
    const employee = registerEmployee()
    employeeArr.push(employee)
}

for(i = 0; i < employeeArr.length; i++){
    console.log('Matrícula: ' + employeeArr[i].registration)
    console.log('Nome: ' + employeeArr[i].name)
    console.log('Salário bruto: ' + employeeArr[i].gross_pay)
    console.log('Dedução INSS: ' + employeeArr[i].inss_deduction)
    console.log('Salário líquido: ' + employeeArr[i].net_pay)
}
