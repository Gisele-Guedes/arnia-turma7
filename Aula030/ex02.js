const io = require('../io/io')

/*Dado o seguinte array de objetos que representa produtos em um
e-commerce:
const produtos = [
{ id: 1, nome: 'Camiseta', preco: 29.9 },
{ id: 2, nome: 'Calça', preco: 59.9 },
{ id: 3, nome: 'Tênis', preco: 99.9 }
]
Escreva uma função chamada calcularTotal que recebe esse array de
produtos e retorna o valor total da compra, somando o preço de cada
produto.*/

const produtos = [
    { id: 1, nome: 'Camiseta', preco: 29.9 },
    { id: 2, nome: 'Calça', preco: 59.9 },
    { id: 3, nome: 'Tênis', preco: 99.9 }
];

function calcularTotal(produtos) {
    let total = 0;

    // Itera pelos produtos e soma os preços
    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].preco;
    }

    return total;
}

// Exemplo de uso:
const total = calcularTotal(produtos);
console.log(total); // Saída: 189.7
