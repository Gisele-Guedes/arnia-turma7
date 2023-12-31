const io = require("../io/io")

/*
Faça um programa de computador para receber 10 nomes de alunos e
suas respectivas notas e depois imprimir as notas e nomes daqueles que
obtiveram notas maiores que 7
*/
let alunos = []
let notas = []

for (let i = 0; i < 10; i++) {
    io.write(`Digite o  ${i + 1} º aluno:`)
    let n = io.readFloat()
    preco.push(n)
    soma += n 
}
let media = soma / 10
for (let i = 0; i < preco.length; i++) {
    if (preco[i] > media)
        io.write(`O preço ${preco[i]} está acima da média`)

}