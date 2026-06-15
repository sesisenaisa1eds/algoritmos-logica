const prompt = require('prompt-sync')();

console.log("--- Média de Vários Alunos ---");

// Estrutura "enquanto...faça...fimenquanto"
// O valor -1 funciona como sentinela para encerrar

let nota = Number(prompt("Digite a nota do aluno (-1 para encerrar): "));

let soma = 0;
let contador = 0;

while (nota !== -1) {
    soma += nota;
    contador++;

    nota = Number(prompt("Digite outra nota (-1 para encerrar): "));
}

if (contador > 0) {
    let media = soma / contador;
    // console.log("Média das notas:", media);
    console.log("Média das notas:", media.toFixed(2));
} else {
    console.log("Nenhuma nota foi informada.");
}