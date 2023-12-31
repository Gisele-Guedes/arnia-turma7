const io = require("../io/io")
/*
Faça um programa de computador para receber 10 números inteiros e
depois imprimir seus sucessores.
*/
let num = []

for(i=0; i<10; i++){
    io.write(`Digite o ${i + 1} ª número:`)
    let n = io.readInt()
    num.push(n)
    }
for (i =0; i <num.length; i++) {
    let sucessor = num[i]+1
    io.write(`O sucessor do ${num[i]} é: ${sucessor}`)
    }