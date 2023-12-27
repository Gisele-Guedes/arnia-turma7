const io = require("../io/io")

/*
Escreva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e escrever
o percentual que cada um representa em relação ao total de eleitores.

*/
io.write("Digite o número total dos eleitores:")
let eleitores = io.readInt()

io.write("Digite o numero total de votos brancos:")
let brancos = io.readInt()

io.write("Digite o numero total de votos nulos:")
let nulos = io.readInt()

io.write("Digite o numero total de votos válidos:")
let validos = io.readInt()

const brancospctg= brancos / eleitores
const nulospctg = nulos / eleitores
const validospctg = validos / eleitores

io.write(`O percentual de votos brancos é ${brancospctg}`)
io.write(`O percentual de votos nulos é ${nulospctg}`)
io.write(`O percentual de votos válidos é ${validospctg}`)
