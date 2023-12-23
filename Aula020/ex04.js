const io = require("../io/io")
/*
Faça um programa para imprimir os múltiplos de 5 menores ou igual
a n, sendo n fornecido pelos usuários. Não use comando de decisão.
*/
io.write('Informe um numero para saber os multiplos de 5 dentro dele:')
let number =  io.readInt() ;
let iterador = 5 ;
while (iterador <= number) {
    console.log(iterador);
    iterador += 5 ;
}


