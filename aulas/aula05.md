# Aula 05 - Operadores e Estruturas de Controle - Condicionais

Neste documento, exploraremos os conceitos fundamentais das linguagens de programação, destacando as diferenças entre linguagens compiladas e interpretadas, bem como entre linguagens de baixo e alto nível. Além disso, discutiremos o funcionamento dos algoritmos, a importância da lógica de programação e as estruturas de controle.

## Linguagens de Programação

As linguagens de programação funcionam como intermediárias entre o programador e o computador, permitindo a comunicação por meio de instruções compreensíveis tanto para humanos quanto para máquinas.

### Compiladas vs. Interpretadas

- **Compiladas**: São convertidas diretamente em linguagem de máquina e tendem a ser mais rápidas e eficientes. Exigem um processo de compilação antes da execução do programa. Exemplos incluem C, C++ e Rust.
- **Interpretadas**: São executadas linha por linha por um interpretador em tempo de execução. São geralmente mais lentas, mas não exigem um processo de compilação. Exemplos incluem JavaScript, PHP e Python.

### Baixo Nível vs. Alto Nível

- **Baixo Nível**: Próximas ao hardware do computador, compostas por instruções compreensíveis pela máquina. Difíceis para humanos entenderem. Exemplos incluem linguagem de montagem.
- **Alto Nível**: Voltadas para humanos, com sintaxe estruturada e legível. Exigem compiladores ou interpretadores para gerar instruções ao processador. Exemplos incluem JavaScript, Python e Java.

## Introdução à Lógica de Programação

### O que é um Algoritmo?

Um algoritmo é um conjunto de passos finitos e organizados que, quando executados, resolvem um determinado problema. Visa fixar um padrão de comportamento claro e sem ambiguidade para solucionar um problema.

### Variáveis

- Nome único
- Tipo de dado associado
- Conteúdo
- Endereço na memória

### Tipos de Dados em JavaScript

- **STRING**: Cadeia de caracteres
- **NUMBER**: Número inteiro ou real
- **BOOLEAN**: Verdadeiro ou falso
- **UNDEFINED** e **NULL**: Indefinido e nulo

## Estruturas de Controle

### Operadores Matemáticos

- Adição (+), Subtração (-), Multiplicação (*), Divisão (/), Módulo (%)

### Operadores Lógicos e Relacionais

- Igual a (==), Diferente de (!=), Maior que (>), Menor que (<)
- Maior ou igual a (>=), Menor ou igual a (<=), Idêntico a (===), Diferente estrito (!==)

### Estruturas de Controle Condicionais

- **Estrutura Condicional Simples**: Executa um bloco de código se a condição for verdadeira.
- **Estrutura Condicional Composta**: Executa um bloco de código se a condição for verdadeira e outro bloco se for falsa.
- **Estrutura de Seleção Switch-Case**: Seleciona um bloco de código com base no valor de uma variável.

## Exemplo de Algoritmo

Vamos criar um algoritmo simples para calcular a média final dos alunos em uma disciplina.

```javascript
// Calcular a média final dos alunos
var P1 = 7;
var P2 = 8;
var media;

// Processamento
media = (P1 + P2) / 2;

// Saída
console.log("A média final dos alunos é: " + media);
