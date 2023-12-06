const io = require('../io/io');
let contador = 0;
io.write('Digite o numero de vezes que você deseja repitir a frase:');
let numero_de_vezes = io.readInt();
io.write('Qual frase você deseja repetir?');
const frase = io.read()
while (contador < numero_de_vezes){
    io.write(frase)
    contador++
}