// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

console.log("--- Cardápio do Restaurante ---");
console.log("");

// Dois vetores paralelos para armazenar nome e preço dos pratos
const nomes  = [];
const precos = [];

// Entrada de dados nos vetores usando Loop
for (let i = 0; i < 4; i++) {

    nomes[i]  = prompt(`Nome do prato ${i + 1}: `);
    precos[i] = parseFloat(prompt(`Preço do prato ${i + 1}: R$ `));
    console.log("");

}

// Exibição do cardápio
console.log("=== Cardápio ===");
console.log("");

for (let i = 0; i < 4; i++) {

    console.log(`${i + 1}. ${nomes[i]} - R$ ${precos[i].toFixed(2)}`);

}

// Escolha do usuário
console.log("");
const opcao = parseInt(prompt("Digite o número do prato desejado (1 a 4): "));

// Validação da opção e exibição do prato escolhido
if (opcao >= 1 && opcao <= 4) {

    console.log("");
    console.log(`Você escolheu: ${nomes[opcao - 1]}`);
    console.log(`Preço: R$ ${precos[opcao - 1].toFixed(2)}`);

} else {

    console.log("Opção inválida!");

}