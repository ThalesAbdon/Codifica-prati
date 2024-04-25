# Aula 10 - Arrays II e Funções Avançadas

###Utilize o loop for...in para iterar sobre as propriedades das notas dos alunos. Em seguida, calcule a média das notas de cada aluno. Por fim, imprima se o aluno está aprovado ou não com base na média obtida.
```javascript
const professor = {
    nome: "Adriana",
    materia: "QGT",
    notas:{
        Emely: 3.5,
        Duda: 5.0,
        Mari: 2.8
    }
}
let soma = 0 ; 
let numerosDeAlunos = 0;
for (const chave in professor.notas){
    soma += professor.notas[chave];
    numerosDeAlunos++;
}
const media = soma/numerosDeAlunos;
console.log(media >= 6 ? `A Turma do ${professor.nome} está acima da média de aprovação` : `A Turma do ${professor.nome} foi reprovada!`) 
```
###Utilizando um loop for...of, itere sobre cada livro na biblioteca. Para cada livro, verifique se o ano de publicação é anterior a 2000. Se sim, imprima o título, autor e ano do livro.

```javascript
const biblioteca = [
    {titles: 'A empregada', autor: 'Freida McFadden' , ano: 2023},
    {titles: 'SHERLOCK HOLMES - O SIGNO DOS QUATRO', autor: 'Árthur Conan Doyle' , ano: 1890},
    {titles: 'Diário de um Banana 1', autor: ' Jeff Kinney' , ano: 2008},
]

for (const livro of biblioteca) {
    if(livro.ano < 2000)
    console.log(`Título: ${livro.titles}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
}
```
### Utilizando o método forEach para iterar sobre o array de filmes, crie um objeto para armazenar a contagem de filmes por gênero. Para cada filme no array, verifique se o gênero já existe no objeto de contagem. Se existir, incremente a contagem; caso contrário, adicione o gênero ao objeto com uma contagem inicial de 1. Após o loop, imprima cada gênero e o número correspondente de filmes.
```javascript
const filmes = [
    {title: 'Tropa de Elite', genero: 'Ação'},
    {title: 'Brilho Eterno de uma Mente sem Lembranças', genero: 'Ficção científica'},
    {title: 'Sonic: O Filme', genero: 'Infantil'},
    {title: 'Sonic: O Filme', genero: 'Infantil'}
]

const contagemPorGenero = {};

filmes.forEach(filme => {
    const { genero } = filme;
    if (contagemPorGenero[genero]) {
        contagemPorGenero[genero]++;
    } else {
        contagemPorGenero[genero] = 1;
    }
});

console.log('Contagem de filmes por gênero:');
for (const genero in contagemPorGenero) {
    console.log(`${genero}: ${contagemPorGenero[genero]}`);
}
```
### Pesquisa binária para uma lista de inteiros positivos
```javascript
function binarySearch(arr, target) {
    arr.sort((a,b) => a - b)
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return -1; 
}

const arr = [4,11,2,192,1,22,49,33];
const target = 33;
const result = binarySearch(arr, target);
if (result !== -1) {
    console.log(`O elemento ${target} foi encontrado`);
} else {
    console.log(`O elemento ${target} não foi encontrado no array.`);
}
```

### Spread operator
 É um recurso do JavaScript introduzido no ES6 (ECMAScript 2015). Ele é representado pelo conjunto de três pontos ... e é usado para expandir uma expressão em múltiplos elementos.

Existem duas principais maneiras de usar o spread operator:
```
javascript
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // Saída: [1, 2, 3, 4, 5, 6]
```
```
javascript
const listaTimes = ['Flamengo','Vasco'];
const listaTimes2 = ['Sampaio Correa', 'Internacional'];
const listaTimesCompleto = ['Palmeiras','Cruzeiro',...listaTimes,...listaTimes2]
console.log(listaTimesCompleto); 
```