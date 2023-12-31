const io = require("../io/io")
/*Faça um programa que recebe do usuário 10 números. E depois do recebimento de todos os números, mostre cada um concatenado com a palavra Número: Antes 1, 2, 3, 4 Número: 1
Número: 2
Número: 3
*/
const array = []

for(i= 0; i < 10; i++){
    io.write('Digite um numero:')
    const numero = io.readInt()
    array.push(numero)
}
    io.write(array)