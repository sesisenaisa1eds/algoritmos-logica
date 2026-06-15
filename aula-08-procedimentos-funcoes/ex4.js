// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// ___________________________________________________________________________
// FUNÇÃO: calculaLitros
// Responsável por CALCULAR e RETORNAR a quantidade de litros necessária
function calculaLitros(dist, cons) {

    return dist / cons;

}

// ___________________________________________________________________________
// FUNÇÃO: calculaCustoTotal
// Responsável por CALCULAR e RETORNAR o custo total do combustível
function calculaCustoTotal(lts, preco) {

    return lts * preco;

}

// ___________________________________________________________________________
// FUNÇÃO: calculaCustoPorKm
// Responsável por CALCULAR e RETORNAR o custo por km rodado
function calculaCustoPorKm(custo, dist) {

    return custo / dist;

}

// ___________________________________________________________________________
// PROCEDIMENTO: exibeRelatorio
// Responsável por EXIBIR o relatório completo da viagem na tela
function exibeRelatorio(destino, dist, cons, preco, lts, custo, porKm) {

    console.log("===== Simulador de Viagem =====");
    console.log("");
    console.log(`Destino:               ${destino}`);
    console.log(`Distancia:             ${dist.toFixed(2)} km`);
    console.log(`Consumo do veiculo:    ${cons.toFixed(2)} km/l`);
    console.log(`Preco do combustivel:  R$ ${preco.toFixed(2)}/l`);
    console.log("");
    console.log("--- Resultado ---");
    console.log("");
    console.log(`Combustivel necessario: ${lts.toFixed(2)} litros`);
    console.log(`Custo total:            R$ ${custo.toFixed(2)}`);
    console.log(`Custo por km:           R$ ${porKm.toFixed(2)}/km`);

}

// ___________________________________________________________________________
// PROGRAMA PRINCIPAL

console.log("--- Simulador de Viagem de Carga ---");
console.log("");

// Entrada de dados
const destino   = prompt("Digite o nome do destino: ");
const distancia = parseFloat(prompt("Digite a distancia em km: "));
const consumo   = parseFloat(prompt("Digite o consumo medio do veiculo (km/l): "));
const precoComb = parseFloat(prompt("Digite o preco do combustivel por litro: "));

// Chamada das três FUNÇÕES para calcular os valores separadamente
// Cada função tem uma responsabilidade única
const litros     = calculaLitros(distancia, consumo);
const custoTotal = calculaCustoTotal(litros, precoComb);
const custoPorKm = calculaCustoPorKm(custoTotal, distancia);

// Chamada do PROCEDIMENTO para exibir o relatório completo
console.log("___________________________________________");
console.log("");
exibeRelatorio(destino, distancia, consumo, precoComb, litros, custoTotal, custoPorKm);