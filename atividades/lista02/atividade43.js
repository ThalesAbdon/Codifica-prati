/*
43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

// Definindo os dois objetos
let obj1 = {
    name: "Maria",
    age: 25,
    city: "São Paulo"
};

let obj2 = {
    age: 30,
    city: "Rio de Janeiro",
    email: "maria@example.com"
};

// Função para combinar as propriedades dos objetos
function joinObjs(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Chamando a função e armazenando o resultado
let joined_obj = joinObjs(obj1, obj2);

// Imprimindo o resultado
console.log(joined_obj);