const io = require("../io/io")

console.log( 'Informe o preço deste produto:')
let produto1 = io.readInt()

console.log( 'Informe o preço deste outro produto:')
let produto2 = io.readInt()

const resultado = produto1 + produto2 / 2
console.log( `A média dos preços dos produtos é de: ${resultado}`)
