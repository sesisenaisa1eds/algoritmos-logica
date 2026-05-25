// Rodar (Pacote para funcionar no terminal)
// npm install prompt-sync

// Importa para meu programa o pacote que vou usar
const prompt = require('prompt-sync')()

// Declarar variáveis
let nomeUsuario = prompt("Informe o nome do usuário: ")
let senha = prompt("Informe a senha: ")
console.log("")

// Simulando dados referência (Normalmente seriam trazidos do BD)
let loginBanco = "Ignacio"
let senhaBanco = "123"

// Lógica para definir se o usuário digitou os dados corretos
if (nomeUsuario === loginBanco && senha === senhaBanco) {
    console.log("Acesso autorizado")
} else{
    console.log("Acesso negado!")
}





