const io = require("../io/io")
/*
if (expressão lógica){
comando1
comando2
comando3
}
else{
    comandoa
    comandob
}

Os comandos de 1 a 3 serão executados se a expressão lógica for verdade
os comandos a e b serão executados somente se a expressão lógica for falsa
*/
if (3>2){
    console.log("Galo Doido!")
}
console.log("Escreva um nome de um time de futebol:")
let n = io.read()
if(n == "Galo"){
    io.write("Você é um Gênio")
    io.write("Bora comer pão de queijo?")
}    
else {
    io.write("rapaz, tome tenência")
}    

io.write("Obrigado!")