const io = require("../io/io")

/*faça um programa que receba 10 números. E depois do recebimento de todos os números, mostre cada um concatenado com a palavra Número: 1, 2 3, 4
número: 1
número: 2
numero: 3
*/
const io = require("../io/io")

/*faça um programa que receba 10 números. E depois do recebimento de todos os números, mostre cada um concatenado com a palavra Número: 1, 2 3, 4
número: 1
número: 2
numero: 3
*/
const array = []
for(i = 0; i<10; i++){
    io.write(`Digite o ${i + 1}º numero:`)
    const numero = io.readInt()
    array.push(numero)

}
console.log(array)

for(let i = 0; i < array.length ; i++){
    io.write(array[i])

}