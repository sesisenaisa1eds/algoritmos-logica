// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require("prompt-sync")();

console.log("--- Placar do Campeonato ---");
console.log("");

// Vetor para armazenar os gols de cada time
const gols = [];

// Entrada de dados no vetor usando Loop
for (let i = 0; i < 5; i++) {
  gols[i] = parseInt(prompt(`Gols do time ${i + 1}: `));
}

// Inicialização dos contadores
let acimaDe3 = 0;
let ate3 = 0;

// Percorrer o vetor e contar usando estrutura condicional
for (let i = 0; i < 5; i++) {
  if (gols[i] > 3) {
    acimaDe3++;
  } else {
    ate3++;
  }
}

// Saída de dados
console.log("");
console.log("=== Resultado ===");
console.log(`Times com mais de 3 gols: ${acimaDe3}`);
console.log(`Times com 3 gols ou menos: ${ate3}`);
