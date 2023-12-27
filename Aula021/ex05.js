const io = require("../io/io")
/*
Escreva um algoritmo para ler o salário mensal atual de um funcionário e
o percentual de reajuste. Calcular e escrever o valor do novo salário.
*/
io.write(`Qual é valor do salário ?`)
let salario = io.readInt()
io.write(`Qual o valor do reajuste?`)
let reajuste = io.readInt()

const novo = salario * (reajuste / 100)
const novoSalario = salario + novo

io.write(`O novo salario com reajuste é ${novoSalario}`)

