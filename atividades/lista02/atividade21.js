/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

// const input = require('prompt-sync')()

function idealWeight(h,g){
    if(g === 'masculino')
        return ((72.7 * h) - 58)
    else
        return ((62.1 * h) - 44.7)
}

// function genderChoice(numberInput){
//     if(numberInput === 1)
//         return 'masculino'
//     else    
//         return 'feminino'
// }

// function validateGenderInput(msg){
//     let value;
//     do {
//         value = input(msg).trim();
//         if( Number(value) != 1 && Number(value) != 2 ){
//             console.log('Por favor, digite uma opção válida!')
//         }
//     } while(Number(value) != 1 && Number(value) != 2)

//     return genderChoice(Number(value))
// }
// function validateHeightInput(msg){
// let value;
// do {
//     value = input(msg).trim();
//     if (isNaN(value) || value <= 0) {
//         console.log("Peso inválido. Por favor, digite uma altura válido!");
//         continue;
//     }
// } while(isNaN(value) || value <= 0)

// return Number(value)
// }

// console.log('Escolha seu gênero')
// const gender = validateGenderInput('1 - masculino ou 2 - feminino: ')
// const height = validateHeightInput('Digite sua altura atual: ')
// const ideal_weight = idealWeight(height,gender)
// console.log(ideal_weight)