const io = require("../io/io")
/*
Faça um programa de computador para calcular o quanto gastou um
fumante com seu vício. O usuário deverá informar o número de anos que
fuma, o número de cigarros por dia e o preço do maço de cigarro.
Considere o maço com 20 unidades (considere o ano com 365 dias)

*/

io.write("Há quantos anos você fuma?")
let anos = io.readFloat()

io.write("Quantos cigarros você fuma por dia?")
let ncigarros = io.readFloat()

io.write("Qual o preço do maço de cigarro?")
let macodecigarro = io.readFloat()

let preco = anos * 365 + ncigarros + macodecigarro * 20

io.write(`Você gastou ${preco} com seu vício`)