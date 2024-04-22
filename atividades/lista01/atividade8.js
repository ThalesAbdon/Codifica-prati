/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/
const input = require('prompt-sync')()
let primeiro_valor = Number(input("Digite o primeiro valor: "))
let segundo_valor = Number(input("Digite o segundo valor: "))

if(primeiro_valor === segundo_valor){
    console.log('------------------------------------------------------')
    console.log('| VALORES IGUAIS! Por favor, use valores diferentes! |')
    console.log('------------------------------------------------------')
    primeiro_valor = Number(input("Digite o primeiro valor: "))
    segundo_valor = Number(input("Digite o segundo valor: "))
}

if(primeiro_valor < segundo_valor){
    console.log(primeiro_valor,segundo_valor)
}else{
    console.log(segundo_valor,primeiro_valor)
}