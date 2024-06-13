/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

// para fins didáticos limitei o range do rand entre 0 e 10.000
arr = []
for(i = 0; i <= 20; i++){
    arr[i] = Math.floor(Math.random() * 100);
}

console.log(arr)
arr.sort(function(a, b) {
    return a - b;
  });
console.log(arr)
