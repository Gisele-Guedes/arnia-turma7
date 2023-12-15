const io = require('../io/io')

const calcularDesconto = idade => (idade < 20 ? 0.1 : 0.05);

const aplicarDesconto = estudantes =>
  estudantes.map(estudante => ({
    ...estudante,
    desconto: calcularDesconto(estudante.idade)
  }));

// Exemplo de uso:
const estudantes = [
  { nome: 'João', idade: 20 },
  { nome: 'Maria', idade: 22 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Ana', idade: 21 }
];

const estudantesComDesconto = aplicarDesconto(estudantes);
console.log(estudantesComDesconto);

