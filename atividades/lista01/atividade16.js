/*
16 - Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

let contador = 0;
let numero = 101;

while (contador < 50) {
    let ehPrimo = true
    let i = 2;
    while(i <= Math.sqrt(numero)){
        if(numero % i === 0){
            ehPrimo = false;
            break;
        }
        i++
    }
    
    if (ehPrimo) {
        console.log(numero);
        contador++;
    }    
    numero++;
}


