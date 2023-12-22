const io = require("../io/io")
//Mostrar mensagem ao usuario//
console.log( 'Informe um numero:')
//receber dado do usuario e coletar dado do cliente//
const numero1 = io.readInt()
//mostrar mensagem ao usuario//
console.log("Informe outro numero:")
//receber dado do usuario e coletar dado do cliente//
const numero2 = io.readInt()
console.log(`Os numeros digitados são ${numero1} e ${numero2} . `)