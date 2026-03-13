const fs = require('fs')
const dados = fs.readFileSync('timesBrasileiros.csv', 'utf8')
console.log("Times:")
console.log(dados)