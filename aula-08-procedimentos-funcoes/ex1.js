// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// ___________________________________________________________________________
// FUNÇÃO: calculaConsumo
// Responsável por CALCULAR e RETORNAR o consumo médio do veículo (km/l)
function calculaConsumo(dist, lts) {

    return dist / lts;

}

// ___________________________________________________________________________
// PROCEDIMENTO: exibeResultado
// Responsável por EXIBIR os dados e o resultado na tela
function exibeResultado(dist, lts, cons) {

    console.log(`Distancia percorrida:  ${dist.toFixed(2)} km`);
    console.log(`Combustivel utilizado: ${lts.toFixed(2)} litros`);
    console.log(`Consumo medio:         ${cons.toFixed(2)} km/l`);

}

// ___________________________________________________________________________
// PROGRAMA PRINCIPAL

console.log("--- Consumo de Combustivel ---");
console.log("");

// Entrada de dados
const distancia = parseFloat(prompt("Digite a distancia percorrida (km): "));
const litros    = parseFloat(prompt("Digite a quantidade de combustivel abastecida (litros): "));

// Chamada da FUNÇÃO para calcular o consumo médio
// O valor retornado pela função é armazenado em consumo
const consumo = calculaConsumo(distancia, litros);

// Chamada do PROCEDIMENTO para exibir os resultados
console.log("___________________________________________");
console.log("");
exibeResultado(distancia, litros, consumo);