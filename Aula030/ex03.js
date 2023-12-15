const io = require('../io/io')

const dobrarNumeros = (arrayDeNumeros, callback) => {
    return arrayDeNumeros.map(numero => callback(numero));
  };
  
  const numeros = [1, 2, 3, 4, 5];
  
  const callbackDobrar = numero => numero * 2;
  
  const resultado = dobrarNumeros(numeros, callbackDobrar);
  console.log(resultado); // Saída: [2, 4, 6, 8, 10]