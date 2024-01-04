const io = require('../io/io')
/*
Faça um programa que receba um numero e use para calcular e mostrar este x 2
*/

function multiplicar (numero1){
    const multiplicarX2 = numero1 * 2 
    io.write(multiplicarX2)
    }

    io.write('Digite um numero')
    const numero = io.readInt()
    multiplicar(numero)


