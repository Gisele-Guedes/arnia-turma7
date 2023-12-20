const io = require("../io/io")
/*
if (expressão lógica){
comando1
comando2
comando3
}
Os comandos de 1 a 3 serão executados se a expressão lógica for verdade
*/
if (3>2){
    console.log("Galo Doido!")
}
console.log("Escreva um nome de um time de futebol:")
let n = io.read()
if(n = "Galo"){
    io.write("Você é um Gênio")
    io.write("Bora comer pão de queijo?")
}
io.write("Obrigado!")