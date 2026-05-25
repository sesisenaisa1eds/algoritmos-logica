const prompt = require('prompt-sync')();

console.log("--- Seleção de Emprego ---");
let idade = parseInt(prompt("Qual a sua idade? "));
let sabeJS = prompt("Sabe programar em JavaScript? (s/n): ") === "s";
let sabePython = prompt("Sabe programar em Python? (s/n): ") === "s";

// O parênteses organiza a ordem, lembrando que a Disjunção (ou) e Conjunção (e) são combinadas aqui
if (idade >= 18 && (sabeJS || sabePython)) {
    console.log("Resultado: Currículo Aceito!");
} else {
    console.log("Resultado: Currículo Recusado.");
}