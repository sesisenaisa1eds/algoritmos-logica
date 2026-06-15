// Rodar no terminal antes de executar o programa:
// npm install prompt-sync

// Importa a biblioteca prompt-sync
// Ela permite que o JavaScript leia dados digitados pelo usuário no terminal
const prompt = require('prompt-sync')();

// Exibe o título do programa
console.log("--- Maior e Menor Preço ---");

// Pula uma linha para deixar a saída mais organizada
console.log("");

// Cria um vetor chamado precos
// Esse vetor será usado para armazenar os 6 preços digitados pelo usuário
const precos = [];

// Estrutura de repetição for
// Será usada para pedir 6 preços ao usuário
// i começa em 0
// enquanto i for menor que 6, o loop continua
// ao final de cada volta, i aumenta 1
for (let i = 0; i < 6; i++) {

    // Solicita ao usuário o preço de um produto
    // i + 1 é usado apenas para mostrar Produto 1, Produto 2, Produto 3...
    // parseFloat converte o texto digitado para número decimal
    // Exemplo: "15.50" vira 15.50
    precos[i] = parseFloat(prompt(`Preço do produto ${i + 1}: R$ `));

}

// Cria a variável maior
// Ela vai guardar o maior preço encontrado
// Começa com 0 porque os preços normalmente serão maiores que zero
let maior = 0;

// Cria a variável menor
// Ela vai guardar o menor preço encontrado
// Começa com um valor muito alto
// Assim, qualquer preço digitado provavelmente será menor que 999999
let menor = 999999;

// Segundo laço for
// Agora vamos percorrer o vetor precos para descobrir o maior e o menor valor
for (let i = 0; i < 6; i++) {

    // Verifica se o preço atual é maior que o valor guardado em maior
    // Se for, atualiza a variável maior
    if (precos[i] > maior) {
        maior = precos[i];
    }

    // Verifica se o preço atual é menor que o valor guardado em menor
    // Se for, atualiza a variável menor
    if (precos[i] < menor) {
        menor = precos[i];
    }

}

// Pula uma linha antes do resultado
console.log("");

// Exibe um título para a área de resultado
console.log("=== Resultado ===");

// Exibe o maior preço encontrado
// toFixed(2) mostra o número com 2 casas decimais
console.log(`Maior preço: R$ ${maior.toFixed(2)}`);

// Exibe o menor preço encontrado
// toFixed(2) mostra o número com 2 casas decimais
console.log(`Menor preço: R$ ${menor.toFixed(2)}`);