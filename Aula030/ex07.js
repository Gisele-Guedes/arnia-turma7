const io = require('../io/io')

const calcularTotalCompra = produtos =>
  produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);

// Exemplo de uso:
const produtos = [
  { id: 1, nome: 'Camiseta', preco: 29.9, quantidade: 2 },
  { id: 2, nome: 'Calça', preco: 59.9, quantidade: 1 },
  { id: 3, nome: 'Tênis', preco: 99.9, quantidade: 3 },
  { id: 4, nome: 'Meias', preco: 9.9, quantidade: 5 }
];

const totalCompra = calcularTotalCompra(produtos);
console.log(totalCompra); // Output: 468.90
