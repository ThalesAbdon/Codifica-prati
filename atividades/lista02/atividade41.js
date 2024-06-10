/*41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.*/

let pessoa = {
    nome: 'Maria',
    idade: 18
}
console.log("Idade:",pessoa.idade)
pessoa.email = "maria@email.com"
console.log(pessoa)