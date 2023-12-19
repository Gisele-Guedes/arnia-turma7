let io = require('../io/io')
/*faça um programa que mostre o dobro ao usuario*/
//Mostrar mensagem ao usuario//
io.write("Digite um numero para multiplicar por 2:")
//receber dado do usuario//
const numero = io.readInt()
//feedback para o usuario//
io.write(`Obrigada! O numero digitado foi: + " " + ${numero}.`)
// dobrar o numero digitado//
const resultado = numero * 2
//mostar o dobro do resultado//
io.write(`O Dobro de ${numero} é ${resultado}`)