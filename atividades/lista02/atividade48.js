/*
48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

function joinedStores(inventarioLojaA, inventarioLojaB) {
    const joined_inventory = {};

    for (let item in inventarioLojaA) {
        joined_inventory[item] = inventarioLojaA[item];
    }

    for (let item in inventarioLojaB) {
        if (joined_inventory[item]) {
            joined_inventory[item] += inventarioLojaB[item];
        } else {
            joined_inventory[item] = inventarioLojaB[item];
        }
    }

    return joined_inventory;
}

const inventarioLojaA = {
    "camisas": 10,
    "bermudas": 20,
    "chinelos": 15
};

const inventarioLojaB = {
    "camisas": 30,
    "cinto": 25,
    "blazer": 20,
    "chinelos": 50
};

const joined_inventory = joinedStores(inventarioLojaA, inventarioLojaB);
console.log(joined_inventory);

