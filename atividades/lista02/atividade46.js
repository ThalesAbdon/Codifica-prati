/*
46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

function sumSales(sales) {
    return sales.reduce((acc, sale) => {
        if (acc[sale.seller]) {
            acc[sale.seller] += sale.valor;
        } else {
            acc[sale.seller] = sale.valor;
        }
        return acc;
    }, {});
}
const sales = [{seller: 'Maria', valor: 100},{seller: 'João', valor: 30},{seller: 'Maria', valor: 20},{seller: 'Maria', valor: 150},{seller: 'Lucas', valor: 200},{seller: 'Maria', valor: 10},{seller: 'João', valor: 40},{seller: 'Maria', valor: 100} ]
const resultado = sumSales(sales);
console.log(resultado);