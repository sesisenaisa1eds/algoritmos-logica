// Importa o módulo (Para rodar algoritmo no terminal)
const prompt = require('prompt-sync')()

// Título
console.log('--- Tabuada ---')
console.log("")

// Pergunta (Qual tabuada gerar)
let numero = Number(prompt('Digite um número para gerar a tabuada: '))
console.log("")

// Laço para gerar a tabuada
for (let i = 1; i <= 10; i++){
    console.log(numero + " X " + i + " = " + (numero * i))
}