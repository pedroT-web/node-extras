const fs = require('fs')

let novoCliente = 'Juca Bala\n'
try {
    const escrever = fs.writeFileSync('clientes.txt', novoCliente)
    console.log("Novo Cliente!!")

    novoCliente = 'Zé Rico\n'
    const inserir = fs.appendFileSync('clientes.txt', novoCliente)
    console.log("+1 Cliente Cadastrado")

    const dados = fs.readFileSync('clientes.txt', 'utf8')
    console.log("Bem Vindo")
    console.log(dados)

} catch (erro) {
    console.error("Erro Aqui::::::" + erro)
}