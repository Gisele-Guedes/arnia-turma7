const io = require("../io/io")

console.log('Informe um numero:')
let numero1 = io.readInt()

console.log('Informe outro numero:')
let numero2 = io.readInt()

const resultado = numero1 % numero2
console.log( `A divisão do ${numero1} e ${numero2} é: ${resultado}`)