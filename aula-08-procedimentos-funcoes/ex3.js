// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// ___________________________________________________________________________
// FUNÇÃO: calculaAproveitamento
// Responsável por CALCULAR e RETORNAR o percentual de aproveitamento
// Aproveitamento = (peças boas / total produzido) * 100
function calculaAproveitamento(total, defeitos) {

    return ((total - defeitos) / total) * 100;

}

// ___________________________________________________________________________
// PROCEDIMENTO: exibeRelatorio
// Responsável por EXIBIR o relatório de produção na tela
function exibeRelatorio(produto, total, defeitos, aprov) {

    console.log("--- Relatorio de Producao ---");
    console.log("");
    console.log(`Produto:           ${produto}`);
    console.log(`Total produzido:   ${total} pecas`);
    console.log(`Pecas com defeito: ${defeitos} pecas`);
    console.log(`Aproveitamento:    ${aprov.toFixed(2)}%`);

}

// ___________________________________________________________________________
// PROCEDIMENTO: exibeSituacao
// Responsável por EXIBIR a mensagem de situação com base no aproveitamento
// Procedimentos em JavaScript são funções que não retornam valor (sem return)
function exibeSituacao(aprov) {

    console.log("");

    if (aprov >= 95) {

        console.log("Situacao: Producao: OTIMA");

    } else if (aprov >= 80) {

        console.log("Situacao: Producao: REGULAR - verificar processo");

    } else {

        console.log("Situacao: Producao: CRITICA - acionar manutencao");

    }

}

// ___________________________________________________________________________
// PROGRAMA PRINCIPAL

console.log("--- Controle de Producao ---");
console.log("");

// Entrada de dados
const produto        = prompt("Digite o nome do produto: ");
const totalProduzido = parseInt(prompt("Digite o total de pecas produzidas: "));
const comDefeito     = parseInt(prompt("Digite a quantidade de pecas com defeito: "));

// Chamada da FUNÇÃO para calcular o aproveitamento
// O valor retornado pela função é armazenado em aproveitamento
const aproveitamento = calculaAproveitamento(totalProduzido, comDefeito);

// Chamada dos PROCEDIMENTOS para exibir o relatório e a situação
console.log("___________________________________________");
console.log("");
exibeRelatorio(produto, totalProduzido, comDefeito, aproveitamento);
exibeSituacao(aproveitamento);