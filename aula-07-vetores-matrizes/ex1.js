// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

console.log("--- Lista de Compras ---");
console.log("");
console.log("Digite o nome de 5 produtos:");
console.log("");

// Vetor para armazenar os produtos
const produtos = [];

// Entrada de dados no vetor usando Loop
// No JavaScript utilizamos o laço for equivalente ao para...faça...fim-para
for (let i = 0; i < 5; i++) {

    produtos[i] = prompt(`Produto ${i + 1}: `);

}

// Saída de dados
console.log("");
console.log("=== Sua lista de compras ===");
console.log("");

for (let i = 0; i < 5; i++) {

    console.log(`${i + 1}º ${produtos[i]}`);

}