const prompt = require('prompt-sync')();

console.log("--- Validação de Senha ---");

// Estrutura equivalente ao "repita...até que"
// No JavaScript utilizamos o laço do...while

let senha;

do {
    senha = prompt("Digite a senha: ");
} while (senha !== "1234");

console.log("Acesso permitido!");