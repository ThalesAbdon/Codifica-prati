/* 
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/


const matrix = new Array(7).fill(0).map(()=>new Array(7).fill(0))

for(i = 0; i < 7; i++){
    matrix[i][i] = 1;
}

for(i = 0; i < 7; i++){
    console.log(matrix[i])
}

