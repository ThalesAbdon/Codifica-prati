# Aula 07 - Arrays e Funções Básicas

Em JavaScript, os arrays são estruturas de dados que armazenam coleções de elementos de forma ordenada. Eles podem ser unidimensionais ou multidimensionais, oferecendo diversas funcionalidades úteis para manipulação de dados.

# Arrays

## Array Unidimensional

Um array unidimensional é uma lista de elementos organizados em uma única dimensão. Eles são declarados da seguinte forma:

```javascript
// Declaração de um array unidimensional vazio
let arrayUnidimensional = [];

// Declaração de um array unidimensional com elementos
let numeros = [1, 2, 3, 4, 5];
let nomes = ["Ana", "João", "Maria"];
```

### Funções Básicas para Arrays Unidimensionais
`push()`

Adiciona um elemento ao final do array.

```javascript
numeros.push(6); // Adiciona o número 6 ao array numeros
```

`pop()`

Remove o último elemento do array e retorna esse elemento.

```javascript
let ultimoElemento = numeros.pop(); // Remove e retorna o número 6
```
##Array Multidimensional
Um array multidimensional é uma matriz de elementos organizados em múltiplas dimensões. Eles são declarados da seguinte forma:

```javascript
// Declaração de um array multidimensional
let arrayMultidimensional = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
```
###Funções Básicas para Arrays Multidimensionais
As funções básicas para arrays multidimensionais são semelhantes às dos arrays unidimensionais, mas aplicadas a cada dimensão do array.

####Acesso a Elementos
```javascript
let elemento = arrayMultidimensional[0][1]; // Acessa o elemento na primeira linha e segunda coluna (2)
```
`push()` e `pop()`

Podem ser usados da mesma forma para adicionar ou remover elementos, mas em cada dimensão separadamente.

##Diversas Formas de Declaração 
###Construtor Array()
```javascript
let arrayConstrutor = new Array(); // Array vazio
let arrayComTamanho = new Array(5); // Array com tamanho 5 (elementos undefined)
let arrayComElementos = new Array("a", "b", "c"); // Array com elementos pré-definidos
```
###Spread Operator
```javascript
let arraySpread = [...numeros]; // Copia os elementos do array numeros para arraySpread
```
###Método Array.of()
```javascript
let arrayOf = Array.of(1, 2, 3, 4, 5); // Cria um array com os elementos fornecidos
```
###Método Array.from()
```javascript
let arrayFrom = Array.from("JavaScript"); // Cria um array com cada caractere da string
```
Os arrays em JavaScript são poderosos e flexíveis, permitindo uma ampla gama de operações de manipulação de dados. Experimente essas diferentes formas de declaração e funções básicas para se familiarizar com o seu uso.

# Funções em JavaScript

As funções em JavaScript são blocos de código reutilizáveis que podem ser chamados para executar uma tarefa específica. Elas desempenham um papel fundamental na modularização e na reutilização de código em programas JavaScript.

# Funções

Em JavaScript, as funções podem ser declaradas de várias maneiras:

## Declaração de Função Padrão

```javascript
function nomeDaFuncao(parametro1, parametro2) {
    // Corpo da função
    // Pode incluir várias instruções
    return resultado; // Opcional, retorna um valor
}
```

### Expressão de Função
```javascript
const nomeDaFuncao = function(parametro1, parametro2) {
    // Corpo da função
    return resultado;
};
```

### Arrow Function (Função de Setas)
```javascript
const nomeDaFuncao = (parametro1, parametro2) => {
    // Corpo da função
    return resultado;
};
```

### Funções de Setas com Apenas um Parâmetro ou Corpo Simplificado
```javascript
const dobrar = x => x * 2; // Retorna o dobro do valor de x
const saudacao = () => "Olá mundo!"; // Retorna uma saudação simples
```

### Chamando Funções
As funções são chamadas executando seu nome seguido por parênteses, opcionalmente passando argumentos para os parâmetros da função, se houver.

```javascript
nomeDaFuncao(argumento1, argumento2);
```

### Parâmetros de Função
Os parâmetros são variáveis listadas como parte da definição de uma função. Eles recebem valores quando a função é chamada.

```javascript
function saudar(nome) {
    console.log("Olá, " + nome + "!");
}
saudar("Ana"); // Saída: Olá, Ana!
```
### Retorno de Função
As funções podem retornar valores usando a declaração return. Se não houver uma instrução de retorno, a função retornará undefined por padrão.

```javascript
function soma(a, b) {
    return a + b;
}

let resultado = soma(5, 3); // resultado é 8
```

### Escopo de Função
As variáveis declaradas dentro de uma função têm escopo local, o que significa que elas só podem ser acessadas de dentro da própria função.

```javascript
function exemplo() {
    let variavelLocal = "Esta variável é local";
    console.log(variavelLocal); // Saída: Esta variável é local
}

console.log(variavelLocal); // Erro: variavelLocal is not defined
```

### Funções como Objetos de Primeira Classe
Em JavaScript, as funções são objetos de primeira classe, o que significa que elas podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.

```javascript
const quadrado = function(x) {
    return x * x;
};

const resultado = quadrado(5); // resultado é 25
```
### Funções Anônimas
Funções anônimas são aquelas que não têm nome. Elas são frequentemente usadas como argumentos para outras funções ou atribuídas a variáveis.

```javascript
const soma = function(a, b) {
    return a + b;
};

console.log(soma(2, 3)); // Saída: 5
```

### Funções Recursivas
Uma função recursiva é uma função que chama a si mesma. Elas são úteis para resolver problemas que podem ser divididos em subproblemas menores.

```javascript
function contarParaTras(numero) {
    if (numero <= 0) {
        console.log("Fim!");
    } else {
        console.log(numero);
        contarParaTras(numero - 1);
    }
}

contarParaTras(5);
// Saída:
// 5
// 4
// 3
// 2
// 1
// Fim!
```
As funções são uma parte essencial da linguagem JavaScript, permitindo a criação de código modular e reutilizável. Dominar o uso de funções é fundamental para se tornar proficiente em JavaScript.