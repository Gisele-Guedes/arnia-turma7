const io = require('../io/io')
/*
Faça um programa para calcular a média de 3 notas de um determinado aluno. Este programa deverá conter uma função que recebe as 3 notas de um aluno por parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2). A função deverá retornar o valor da média calculada.
*/

function notasDosAlunos (notas, notas1, notas2, tipo){
    if(tipo == 'A'){
        const MediaAritmetica = (notas1 + notas + notas2) / 3
        return MediaAritmetica
    }
    else(tipo == 'B')
        const MediaPonderada = (notas * 5 + notas1 * 3 + notas2 * 2)/ 10
        return MediaPonderada
}

io.write(`Digite a primeira nota:`)
let notas = io.readFloat()
io.write(`Digite a segunda nota:`)
let notas1 = io.readFloat()
io.write(`Digite a terceira nota:`)
let notas2 = io.readFloat()
io.write(`Qual é a Letra? [ A ou P]`)
let tipo = io.read()
let MediaFinal = notasDosAlunos(notas, notas1 , notas2, tipo)
io.write(`A média é ${MediaFinal}`)