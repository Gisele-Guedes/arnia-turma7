const io = require("../io/io")
/*
Faça um programa de computador para escrever 1 - ímpar, 2 - par, 3
- ímpar, .... até n, sendo n fornecido por um usuário.
*/
io.write('Digite um numero para saber se é par ou impar')
let iterador = 1;
let numero = io.readInt()
while (iterador <= numero) {
if(iterador % 2 == 0){
        io.write(`${iterador} + é par`);
}  
else {
    io.write(`${iterador} + é impar`);
    }
iterador++
}  