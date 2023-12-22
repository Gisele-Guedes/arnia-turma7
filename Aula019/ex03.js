const io = require("../io/io")

/*
Faça um programa de computador que receba do usuário três tamanhos
de segmentos de reta e acuse se estes segmentos formam ou não os
lados de um triângulo. Para formar um triângulo o maior segmento deve
ser menor que a soma dos outros dois. Suponha que o maior lado sempre
será digitado primeiro.
*/
io.write("Me informe o tamanho do primeiro segmento de reta?")
let a = io.readInt()

io.write("Me informe o tamanho do segundo segmento de reta?")
let b = io.readInt()

io.write("Me informe o tamanho do terceiro segmento de reta?")
let c = io.readInt()

if (a < (b + c) && b < (a + c) && c < (a + b)) {
    console.log("É um triangulo!" )
}
else{
    console.log("Não é um triangulo!")
}