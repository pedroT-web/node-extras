const fs = require('fs')
const fsextra = require('fs-extra')

let pasta = 'fotos'

console.log("\n\n========== Verificando pasta ==========")
if(fs.existsSync(pasta)){
    console.log("Tudo Certo")
}else{
    console.log("A pasta não existe")
}

pasta = 'icones/ilustracoes'
console.log("\n\n======== Criando Pasta ======== ")
if(!fs.existsSync(pasta)){
    fs.mkdirSync(pasta)
    console.log("Pasta Criada")
}else{
    console.log("Pasta já existe")

}

console.log("\n\n===== renomeando pasta =====")
try {
    fs.renameSync('icones', 'icons')
    console.log("pasta renomeada")
} catch (erro) {
    console.log("não foi renomeada")
}

const folder = 'icons'

console.log("\n\n===== excluindo pasta =====")
fsextra.remove(folder, erro => {
    console.error(erro)
})