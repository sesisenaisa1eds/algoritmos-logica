const prompt = require('prompt-sync')();

console.log("--- Caixa da Loja: Super Desconto ---");
let valorCompra = parseFloat(prompt("Qual o valor total da compra? R$ "));
let clienteVIP = prompt("Você é um cliente VIP? (s/n): ") === "s";
let temCupom = prompt("Você possui um cupom promocional? (s/n): ") === "s";
let temAtraso = prompt("Você possui parcelas atrasadas? (s/n): ") === "s";

console.log(""); // Espaço no terminal

// Aqui a mágica da prioridade acontece exatamente como no PDF da aula:
// 1º O operador 'não' (!) é resolvido primeiro (!temAtraso).
// 2º Os operadores 'e' (&&) avaliam os blocos (clienteVIP && valorCompra > 500) e (temCupom && !temAtraso).
// 3º Por fim, o operador 'ou' (||) verifica se pelo menos um dos cenários inteiros foi verdadeiro.
if (clienteVIP && valorCompra > 500 || temCupom && !temAtraso) {
    console.log("Resultado: Super Desconto APLICADO!");
} else {
    console.log("Resultado: Compra com valor normal (Sem desconto).");
}