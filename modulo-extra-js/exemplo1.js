/*
Exemplo de entrasa de dados para fazer uma entrada de dados é preciso declarar uma váriavel */
let io = require("../io/io")
// node reserve um espaço de memória chamada n e cloque nulo nesta variavel //
let n = ''
//node instrua ao usuario para digitar seu nome//
io.write("Digite o seu nome:")
// COLOQUE, ATRIBUA, A SEQUENCIA DE CARACTEES GALO PARA N//
n = 'Galo'
// node espere o usuario digitat algo e depois do enter atribua este algo ao espaço de memoria n//
n = io.read("")
// node, escreva o conteúdo de n na tela//Escreva olá para o usuario//
io.write("Olá" + n)