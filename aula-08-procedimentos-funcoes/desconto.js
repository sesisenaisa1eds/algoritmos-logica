// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// ___________________________________________________________________________
// FUNÇÃO: calculaDesconto
// Responsável por CALCULAR e RETORNAR o preço final após o desconto
// Funções em JavaScript utilizam "return" para devolver um valor
function calculaDesconto(valor, percentual) {

    // Multiplica o valor pelo percentual informado
    // Exemplo: 100 * 0.90 = 90 (10% de desconto)
    return valor * percentual;

}

// ___________________________________________________________________________
// PROCEDIMENTO: mostraValores
// Responsável apenas por EXIBIR os dados na tela
// Procedimentos em JavaScript são funções que não retornam valor (sem return)
function mostraValores(texto, valor) {

    console.log(`${texto}: R$ ${valor.toFixed(2)}`);
    console.log("");

}

// ___________________________________________________________________________
// PROGRAMA PRINCIPAL

console.log("--- Cálculo de Desconto com Função e Procedimento ---");
console.log("");

// Entrada de dados
const produto = prompt("Digite o nome do produto: ");
const preco   = parseFloat(prompt("Informe o preço do produto: "));

// Estrutura condicional para definir o percentual de desconto
// Dependendo do preço, será aplicado um percentual diferente
let percentual;

if (preco < 50) {

    percentual = 0.95;        // 5% de desconto

} else if (preco <= 100) {

    percentual = 0.90;        // 10% de desconto

} else {

    percentual = 0.85;        // 15% de desconto

}

// Chamada da FUNÇÃO para calcular o preço final
// O valor retornado pela função é armazenado em precoFinal
const precoFinal = calculaDesconto(preco, percentual);

// Exibição dos resultados
console.log("___________________________________________");
console.log("");

console.log(`Produto: ${produto}`);
console.log("");

// Chamada do PROCEDIMENTO para exibir o preço original
mostraValores("Preço original", preco);

// Exibe o percentual de desconto aplicado
console.log(`Desconto aplicado: ${((1 - percentual) * 100).toFixed(0)} %`);
console.log("");

// Chamada do PROCEDIMENTO para exibir o preço final
mostraValores("Preço final", precoFinal);