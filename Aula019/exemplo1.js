const io = require("../io/io")

console.log("Digite um numero: ")
let numeropar = io.readInt()
if(numeropar % 2 == 0) {
    console.log('Numero Par!')
}
else{
    console.log(' Numero Impar!')
}
numeropar++