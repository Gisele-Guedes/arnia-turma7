const io = require('../io/io')
/*
Faça uma função que recebe a idade de uma pessoa em anos, meses e
dias e retorna essa idade expressa em dias.
*/

function IdadeMesDiaAno(ano, mes,dias){
    const idade  = (ano * 365) + (( mes * 30) + dias)
    return idade
}
io.write('--- Calculo da idade em dias ---')
io.write('Há quantos anos inteiros você nasceu?')
let ano = io.readInt()
io.write('Há quantos meses inteiros você nasceu?')
let mes = io.readInt()
io.write('Que dia você nasceu?')
let dias = io.readInt()
const resultado = IdadeMesDiaAno(ano, mes, dias)
console.log(`${resultado} dias.`)