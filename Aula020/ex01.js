const io = require('../io/io');
/*
Faça um programa que recebe do usuário um número inteiro n e uma
frase e escreva esta frase n vezes
*/

let iterador = 0
io.write('Quantas vezes você deseja repetir a frase?')
let NumeroDeVezes = io.readFloat()
io.write("Qual frase você deseja repetir?")
let frase = io.read()
while(iterador < NumeroDeVezes){
    io.write(frase)
    iterador++
}