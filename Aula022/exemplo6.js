const io = require("../io/io")

/* faça um programa que receba 5 sálarios e retorne a soma de todos os salarios */
let somaSalarios = 0
for ( let i = 0; i < 5; i++){
    io.write('Informe o salário:')
    const salario = io.readFloat()

    somaSalarios = somaSalarios + salario

}
io.write(`A soma dos salários é: R$ ${somaSalarios}`)