const io = require("../io/io")

/*
Faça um programa de computador que receba do usuário 2 números e
acuse qual é o maior
*/
io.write("Informe um numero: ")
let numero1 = io.readInt()

io.write("Informe um numero: ")
let numero2 = io.readInt()

if(numero1 > numero2){
    io.write(`${numero1} é maior`)
}
else{
    io.write(`${numero2} é maior`)
}
