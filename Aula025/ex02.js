const io = require('../io/io')
/*
Faça um programa que peça ao usuário um número natural e
imprima seus divisores.
➢ Divisores de 10: números menores ou iguais à 10 pelos quais 10 se
divide de forma exata (com resto igual a 0)
■ 1, 2, 5, 10
*/
io.write(`Informe um número:`)
let num = io.readInt()
let contDivisores = 0; //contador dos divisores do número informado
for (let i=1;i<=num;i++){
    if(num%i==0){
        contDivisores++
        }
        }
io.write(`O número ${num} tem ${contDivisores} divisor(es).`)