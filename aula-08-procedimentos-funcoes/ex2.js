// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// ___________________________________________________________________________
// FUNÇÃO: calculaFrete
// Responsável por CALCULAR e RETORNAR o valor do frete
// O valor por km varia conforme o peso da encomenda
function calculaFrete(p, dist) {

    if (p <= 5) {

        return dist * 2.00;       // Até 5 kg: R$ 2,00 por km

    } else if (p <= 20) {

        return dist * 3.50;       // Entre 5,01 e 20 kg: R$ 3,50 por km

    } else {

        return dist * 5.00;       // Acima de 20 kg: R$ 5,00 por km

    }

}

// ___________________________________________________________________________
// PROCEDIMENTO: exibeFrete
// Responsável por EXIBIR os dados da encomenda e o valor do frete
function exibeFrete(p, dist, vFrete) {

    console.log(`Peso da encomenda:  ${p.toFixed(2)} kg`);
    console.log(`Distancia:          ${dist.toFixed(2)} km`);
    console.log(`Valor do frete:     R$ ${vFrete.toFixed(2)}`);

}

// ___________________________________________________________________________
// PROGRAMA PRINCIPAL

console.log("--- Calculo de Frete ---");
console.log("");

// Entrada de dados
const peso      = parseFloat(prompt("Digite o peso da encomenda (kg): "));
const distancia = parseFloat(prompt("Digite a distancia de entrega (km): "));

// Chamada da FUNÇÃO para calcular o frete
// O valor retornado pela função é armazenado em frete
const frete = calculaFrete(peso, distancia);

// Chamada do PROCEDIMENTO para exibir os resultados
console.log("___________________________________________");
console.log("");
exibeFrete(peso, distancia, frete);