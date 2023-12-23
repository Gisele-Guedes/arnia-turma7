const io = require("../io/io")


let soma20 = 0
let iterador = 0
while (iterador < 20) {
    io.write('Digite um numero inteiro:')
    soma20 = soma20 + io.readFloat()
    iterador++
}
const media = soma20 / 20
io.write(`A soma dos 20 média aritiméca é:${media}` )

