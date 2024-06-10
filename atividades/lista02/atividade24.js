/*
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

let M = [
    [1,-3,2,-4,5,8,-7,-1],
    [-20,22,23,-25,-29,21,-21,24],
    [-11,-3,2,-4,5,8,-7,0],
    [1,8,-92,100,5,29,31,-50],
    [1,-3,2,-4,5,8,-7,-1],
    [10,20,30,40,50,60,70,80],
]

let C = Array(6).fill(0)

for(let l = 0; l < 6; l++){
    let countNegative = 0;
    for(let c = 0; c < 8; c++){
        if(M[l][c] < 0){
            countNegative++;
        }
    }
    C[l] = countNegative;
}

console.table(C)