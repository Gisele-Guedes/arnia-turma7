const io = require("../io/io")

io.write("Digite um número inteiro")
let n = io.read()

if (n % 2==0){
    io.write("Numero Par")
}
else {
    io.write("Numer Ímpar")
}