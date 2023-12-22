const io = require("../io/io")

io.write("Informe o valor de a:")
const a = io.readInt()

io.write("Informe o valor de b:")
const b = io.readInt()

io.write("Informe o valor de c:")
const c = io.readInt()

let delta = (b * b) - (4 * a * c);
if (delta < 0){
    io.write("A equação não tem raizes reais")
}
else{
    let x1 = ((-b)+Math.sqrt(delta))/(2*a);
    let x2 = ((-b)-Math.sqrt(delta))/(2*a);
    io.write(`As raizes da equacao sao ${x1} e ${x2}`)
    }
