const io = require("../io/io")

io.write('Digite um país:')
let pais = io.read()

if (pais == "Brasil"){
    io.write("Gigante pela própria natureza!")
}
else{
    io.write("Páis estranhgeiro!")
}
pais++