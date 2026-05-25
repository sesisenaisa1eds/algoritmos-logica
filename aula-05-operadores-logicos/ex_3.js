const prompt = require('prompt-sync')();

console.log("--- Controle de Estoque ---");
let esgotado = prompt("O produto está esgotado? (s/n): ");

// Transformamos a resposta em um valor verdadeiro ou falso
let estaEsgotado = (esgotado === "s");

// No JavaScript, o operador lógico 'não' é representado por !
if (!estaEsgotado) {
    console.log("Produto disponível para venda!");
} else {
    console.log("Por favor, reabasteça o estoque.");
}