const io = require('../io/io')

/*Escreva uma função chamada somarValores que recebe um
array de números e retorna a soma de todos os valores do array
utilizando a função reduce.*/
function somarValores(array) {
    // Utilizando a função reduce para somar os valores do array
    const soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    // Retornando o resultado da soma
    return soma;
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5];
const resultado = somarValores(numeros);
console.log(resultado);