// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

console.log("--- Invertendo um Vetor ---");
console.log("");
console.log("Digite 5 números inteiros:");
console.log("");

// Vetor para armazenar os números
const numeros = [];

// Entrada de dados no vetor usando Loop
for (let i = 0; i < 5; i++) {

    numeros[i] = parseInt(prompt(`${i + 1}º número: `));

}

// Saída de dados em ordem inversa
// No JavaScript utilizamos o laço for com decremento (i--) equivalente ao passo -1 do VisuAlg
console.log("");
console.log("=== Ordem invertida ===");
console.log("");

for (let i = 4; i >= 0; i--) {

    console.log(numeros[i]);

}