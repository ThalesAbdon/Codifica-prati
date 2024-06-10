/*
44. Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

let charmander = {
    pokedexNumber: 4,
    evolutions: ['Charmeleon','Charizard'],
    attacks: ['Growl','Scratch','Ember','Smokescreen','Dragon Breath','Fire Fang','Slash','Flamethrower','Scary Face'],
    physiognomy: 'É um Pokémon pequeno, bípede e parecido com um dinossauro. A maior parte de seu corpo é de cor laranja, enquanto seu ventre é de uma cor amarelo-clara pálida. Tem quatro dedos pequenos em cada mão e três garras em cada pé. Possui uma chama que queima constantemente na ponta de sua cauda.',
    weight: '8.5 kg'
}

function countProps(obj){
    let c = 0;
    for(const prop in obj){
        if(typeof obj[prop] === 'string'){
            c++;
        }
    }
    return c
}

console.log(countProps(charmander))