const io = require("../io/io")

/*
Faça um programa para escrever de 1 a n, sendo n fornecido
pelo usuário
*/
io.write('Me informa a quantidade:')
let n = io.readInt()
for(i = 1 ; i < n ; i++ ){
    io.write(i)
    
}
