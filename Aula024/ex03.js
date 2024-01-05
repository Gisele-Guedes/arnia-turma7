const io = require('../io/io')
/*
Escreva uma função que recebe, por parâmetro, dois valores X e Z e
calcula e retorna Xz (X elevado à Z). (sem utilizar funções ou operadores de potência prontos)
*/
function potencia(X,Y) {
    let calculo = X **Y
    return calculo
}


io.write(`Informe a base:`)
let X = io.readInt()

io.write(`Informe a potência:`)
let Y = io.readInt()

let resultado = potencia(X,Y)
io.write(`O resultado é ${resultado}:`)
