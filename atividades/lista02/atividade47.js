/*
47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/

function applyFunctionOnObject(obj,func) {
    const newObject = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObject[key] = func(obj[key]);
        }
    }
    return newObject;
}

// Exemplo de uso
const pokemonLevels = {
    Lapras: 10,
    Charmander: 12,
    Heracross: 17
};

function rareCandy(level) {
    return level + 1;
}

const newObject = applyFunctionOnObject(pokemonLevels, rareCandy);
console.log(newObject);
