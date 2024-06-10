/*
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

let charmander = {
    pokedexNumber: 4,
    evolutions: ['Charmeleon','Charizard'],
    attacks: ['Growl','Scratch','Ember','Smokescreen','Dragon Breath','Fire Fang','Slash','Flamethrower','Scary Face'],
    physiognomy: 'É um Pokémon pequeno, bípede e parecido com um dinossauro. A maior parte de seu corpo é de cor laranja, enquanto seu ventre é de uma cor amarelo-clara pálida. Tem quatro dedos pequenos em cada mão e três garras em cada pé. Possui uma chama que queima constantemente na ponta de sua cauda.',
    weight: '8.5 kg'
}

function filterProps(obj){
    let result = {}
    for(let key in obj){
        if (Array.isArray(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}

let objectArrays = filterProps(charmander);
console.log(objectArrays);