const io = require('../io/io')

const aplicarDesconto = (estudantes, callback) =>
  estudantes.map(estudante => ({
    ...estudante,
    desconto: callback(estudante.idade)
  }));

// Exemplo de uso:
const estudantes = [
  { nome: 'João', idade: 20 },
  { nome: 'Maria', idade: 22 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Ana', idade: 21 }
];

const callbackDesconto = idade => (idade < 20 ? 0.1 : 0.05);

const estudantesComDesconto = aplicarDesconto(estudantes, callbackDesconto);
console.log(estudantesComDesconto);
