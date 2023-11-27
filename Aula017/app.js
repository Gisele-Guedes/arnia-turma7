console.log("Alô mundo")
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function coletarDadosPessoais() {
  return new Promise((resolve, reject) => {
    rl.question('Digite seu nome: ', (nome) => {
      rl.question('Digite sua idade: ', (idade) => {
        rl.question('Digite seu endereço: ', (endereco) => {
          const dadosPessoais = {
            nome,
            idade,
            endereco
          };
          resolve(dadosPessoais);
        });
      });
    });
  });
}

async function main() {
  console.log('Bem-vindo! Por favor, forneça seus dados pessoais.');

  const dadosPessoais = await coletarDadosPessoais();

  console.log('\nAqui estão seus dados pessoais:');
  console.log(`Nome: ${dadosPessoais.nome}`);
  console.log(`Idade: ${dadosPessoais.idade}`);
  console.log(`Endereço: ${dadosPessoais.endereco}`);

  rl.close();
}

main();
