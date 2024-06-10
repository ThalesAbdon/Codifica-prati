/*
45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

function countStrings(arr) {
    return arr.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
}

const arr = ['Bulbasaur', 'Chikorita', 'Bulbasaur', 'Bulbasaur','Bulbasaur','Treecko', 'Chikorita'];
const result = countStrings(arr);
console.log(result);
