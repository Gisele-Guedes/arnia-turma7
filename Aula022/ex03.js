const io = require("../io/io")

/*
Faça um programa para pedir 10 nomes de pessoas ao
usuário e acusar quantas se chamam “Maria”
*/
let contadorMaria = 0
for(let i = 0; i < 10; i++){
    io.write(' Digite 10 nomes')
    let nomes = io.read()
    if(nomes === 'Maria'){
        contadorMaria++

    }

}
io.write(`O numero de pessoas que se chamam 'Maria' é: ${contadorMaria}`)