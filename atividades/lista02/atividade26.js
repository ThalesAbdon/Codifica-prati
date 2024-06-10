/*
26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].
*/

let A = [
    [10, 20, 30, 40, 50],
    [60, 70, 80, 90, 10],
    [110, 120, 130, 140, 150]
];

let B = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15]
];

let P = new Array(3);
for (let i = 0; i < 3; i++) {
    P[i] = new Array(3).fill(0);
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 5; k++) {
            P[i][j] += A[i][k] * B[k][j];
        }
    }
}

console.log("Matriz P (produto de A e B):");
for (let i = 0; i < 3; i++) {
    console.log(P[i]);
}