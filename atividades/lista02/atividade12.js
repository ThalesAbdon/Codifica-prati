/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

function fibonacci(n){
    if(n <= 1 ){
        return n
    }
    return fibonacci(n -1) + fibonacci (n - 2)
}

n  = 10

for (let i = 1; i <= n; i++) { 
    console.log(fibonacci(i)); 
};