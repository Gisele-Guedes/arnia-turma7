const io = require("../io/io")

io.write('Digite um numero:')
let n = io.readInt()

io.write('Digite um numero:')
let m = io.readInt()

let resultado = n + m > 10

if (resultado > 10) {
    io.write("O produto é maior que 10!")
}
else {
    io.write("O produto é menor que 10!")
}
resultado++