/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/

function fibonacci(elem){
    if(elem <= 1 ){
        return elem
    }
    return fibonacci(elem -1) + fibonacci (elem - 2)
}

let arr = []
elem  = 15

for (let i = 1; i <= elem; i++) { 
    arr[i-1] = fibonacci(i)
};

console.log(arr)