const fs = require('fs')

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