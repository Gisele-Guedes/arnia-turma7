const io = require('../io/io')
/*
Faça uma função que recebe um valor inteiro e verifica se o valor é par.
A função deve retornar um valor booleano (true ou false).
*/
function npar(numero){
    if (numero % 2 === 0) return true;
        else return false;
    
}
    io.write(`Informe um numero:`)
    let numero = io.readInt()
    let VerdadeMentira = npar(numero)
    io.write(`O numero ${numero} é  ${VerdadeMentira}`)