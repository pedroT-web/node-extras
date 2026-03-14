const fs = require('fs')
const os = require('os')

const nomeHost = os.hostname()
const memoriaGB = os.totalmem() / (1024 ** 3)
const sistemaOperacional = os.type()
const usuarioAtivo = os.userInfo().username
const modeloCpu = os.cpus()[0].model
const qtdCpu = os.cpus().length

const escritas = [
    `HOST: ${nomeHost}`,
    `Total de memória disponível em GB: ${memoriaGB.toFixed(2)}`,
    `Sistema Operacional: ${sistemaOperacional}`,
    `Nome do Usuário Ativo: ${usuarioAtivo}`,
    `Quantidade de CPU: ${qtdCpu}`,
    `Modelo da CPU: ${modeloCpu}`
]

try{
    fs.writeFile(`registro_${nomeHost}.txt`, escritas.join('\n'), erro => {
        if(erro){
            console.log(erro)
            return
        }
        console.log("Dados Inseridos")
    })
} catch(erro){
    console.error("TEM ERRO AQUI::::" + erro)
}