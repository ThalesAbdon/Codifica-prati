/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/

const input = require('prompt-sync')()
let populationArr = []

class Person {
    constructor(salary, qtdChildren) {
        this.salary = salary;
        this.qtdChildren = qtdChildren;
    }
}

function validateSalaryInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(!(Number(value)) || isNaN(value) || Number(value) <= 0){
            console.log('Por favor, digite um salário válido!')
        }
    } while(!(Number(value)) || isNaN(value) || Number(value) <= 0)

    return value
}

function validateNumberOfChildrenInput(msg){
    let value;
    do {
        value = input(msg).trim();
        if(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) < 0){
            console.log('Por favor, digite um valor inteiro positivo.')
        }
    } while(!Number.isInteger(Number(value)) || isNaN(value) || Number(value) < 0)

    return parseInt(value)
}

function registerPerson(){
    const salary = validateSalaryInput('Digite o salário: ')
    const qtdChildren = validateNumberOfChildrenInput('Digite o número de filhos: ')
    return new Person(salary, qtdChildren)
}


function search(){
    while(true){
        const person = registerPerson()
        populationArr.push(person)
        let proceed = input("Deseja inserir dados de mais Pessoas? (S ou s para sim): ").toUpperCase();
        if (proceed !== 'S') {
            break;
        }
    }

        let total_salary = 0
        let higher_salary = Number(populationArr[0].salary);
        let avg_salary = 0;
        let total_children = 0
        let avg_children = 0;
        let low_income = 0;
        for(i = 0; i < populationArr.length; i++){
            total_salary += Number(populationArr[i].salary)
            total_children += Number(populationArr[i].qtdChildren)

            if(Number(populationArr[i].salary) <= 350){
                low_income++;
            }

            if( Number(populationArr[i].salary) > higher_salary)
                higher_salary = Number(populationArr[i].salary)
        }
        avg_salary = total_salary / populationArr.length
        avg_children = total_children / populationArr.length
        low_income_percentual = (low_income / populationArr.length) * 100
        return { mediaSalario: avg_salary.toFixed(2), mediaFilhos: avg_children.toFixed(2), maiorSalario: higher_salary.toFixed(2),percentualPessoasBaixaRenda: low_income_percentual + '%'}
}

console.log(search())
