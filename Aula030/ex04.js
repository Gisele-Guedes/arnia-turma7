const io = require('../io/io')

const filtrarPalavras = (arrayDePalavras, callback) => {
    return arrayDePalavras.filter(palavra => callback(palavra));
  };
  
  const palavras = ['cachorro', 'gato', 'elefante', 'pássaro'];
  
  // Defina a função de callback para filtrar palavras com mais de 5 caracteres
  const callbackFiltrar = palavra => palavra.length > 5;
  
  const resultado = filtrarPalavras(palavras, callbackFiltrar);
  console.log(resultado); // Saída: ['cachorro', 'elefante']
  