// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

console.log("--- Sistema Escolar ---");
let nota = parseFloat(prompt("Informe a nota do aluno (0 a 10): "));
let frequencia = parseInt(prompt("Informe a frequência do aluno (%): "));

// No JavaScript, o operador lógico 'e' é representado por &&
if (nota >= 7.0 && frequencia >= 75) {
    console.log("Resultado: Aluno Aprovado!");
} else {
    console.log("Resultado: Aluno Reprovado.");
}