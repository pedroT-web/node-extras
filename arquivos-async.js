const fs = require('fs')

// Escrever dados em um arquivo / Apaga tudo do arquivo
// fs.writeFile('clientes.txt', novoCliente, erro => {
//     if (erro) {
//         console.error(erro)
//         return
//     }
//     console.log("Novo Cliente Cadastrado!!!")
// })

let novoCliente = "João da Silva\n"
fs.appendFile('clientes.txt', novoCliente, erro => {
    if (erro) {
        console.error(erro)
        return
    }
    console.log("Cliente Cadastrado!!!")
})

// Escrever dados em um arquivo / sem Apagar o que tem lá
novoCliente = "Murilo Quintal\n"
fs.appendFile('clientes.txt', novoCliente, erro => {
    if (erro) {
        console.error(erro)
        return
    }
    console.log("Cliente Cadastrado!!!")
})


// Ler dados de um arquivo
fs.readFile('clientes.txt', 'utf8', (erro, dados) => {
    if (erro) {
        console.error(erro)
        return
    }
    console.log(dados)
})
console.log("Bem Vindo")
