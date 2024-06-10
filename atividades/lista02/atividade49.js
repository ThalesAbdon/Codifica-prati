/*
49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function categorizeTransactions(transactions) {
    const categorizedTransactions = {};

    transactions.forEach(transaction => {
      const { categoria, valor } = transaction;
  
      if (!categorizedTransactions[categoria]) {
        categorizedTransactions[categoria] = {
          transactions: [],
          subtotal: 0
        };
      }
  
      categorizedTransactions[categoria].transactions.push(valor);
  
      categorizedTransactions[categoria].subtotal += valor;
    });
  
    return categorizedTransactions;
  }
  
  const transactions = [
    { id: 1, valor: 100, data: '2024-06-07', categoria: 'Vestimentas' },
    { id: 2, valor: 50, data: '2024-06-06', categoria: 'Transporte' },
    { id: 3, valor: 200, data: '2024-06-05', categoria: 'Vestimentas' },
    { id: 4, valor: 150, data: '2024-06-04', categoria: 'Transporte' },
    { id: 5, valor: 200, data: '2024-06-05', categoria: 'Vestimentas' },
    { id: 6, valor: 150, data: '2024-06-04', categoria: 'Energia' }
  ];
  
  const result = categorizeTransactions(transactions);
  console.log(result);