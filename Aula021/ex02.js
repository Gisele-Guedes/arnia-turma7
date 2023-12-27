const io = require("../io/io")

/*
Faça um programa de computador que receba do usuário três tamanhos
de segmentos de reta em ordem aleatória e acuse se estes segmentos
formam ou não os lados de um triângulo. Para isso, um lado deve ser
sempre menor que a soma dos outros dois lados.

*/
io.write("Qual é o tamanho do Lado A?")
let a = io.readFloat()

io.write("Qual é o tamanho do Lado B?")
let b = io.readFloat()

io.write("Qual é o tamanho do Lado C?")
let c = io.readFloat()

if ( a < (b + c) && b < (a + c) && c < (b + a) ) {
    io.write(`Os lados ${a}, ${b}, ${c} formam um triângulo.`)
}else{
    io.write(`Os lados ${a}, ${b}, ${c} não formam um triângulo.`)
}
