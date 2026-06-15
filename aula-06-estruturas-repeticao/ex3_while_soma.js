// Importa a biblioteca prompt-sync, que permite ler dados digitados pelo usuário no terminal
const prompt = require('prompt-sync')();

// Exibe um título no terminal para indicar o objetivo do programa
console.log("--- Soma de 1 até o número informado ---");

// Comentário explicando que a estrutura usada é equivalente ao "enquanto...faça...fimenquanto"
// Em JavaScript, essa estrutura é feita com o laço de repetição while

// Solicita ao usuário que digite um número inteiro positivo
// O prompt sempre lê o valor como texto
// Por isso, usamos Number() para converter o texto digitado em número
let numero = Number(prompt("Digite um número inteiro positivo: "));

// Cria uma variável chamada contador e inicia com o valor 1
// Ela será usada para contar de 1 até o número informado pelo usuário
let contador = 1;

// Cria uma variável chamada soma e inicia com 0
// Ela será usada para acumular a soma dos números
let soma = 0;

// Enquanto o contador for menor ou igual ao número digitado, o bloco será repetido
while (contador <= numero) {

    // Soma o valor atual do contador dentro da variável soma
    // É o mesmo que escrever: soma = soma + contador;
    soma += contador;

    // Aumenta o contador em 1 a cada repetição
    // É o mesmo que escrever: contador = contador + 1;
    contador++;
}

// Após o fim do while, exibe o resultado final da soma
console.log("Resultado da soma:", soma);