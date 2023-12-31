const io = require("../io/io")
/*
Faça um programa de computador para receber preços de 10 produtos
e depois imprimir os preços que estão acima da média.

*/
let preco = []
let soma = 0

for (let i = 0; i < 10; i++) {
    io.write(`Digite o ${i + 1} º preço do produto:`)
    let n = io.readFloat()
    preco.push(n)
    soma += n //soma = soma + n//
}
let media = soma / 10
for (let i = 0; i < preco.length; i++) {
    if (preco[i] > media)
        io.write(`O preço ${preco[i]} está acima da média`)

}
