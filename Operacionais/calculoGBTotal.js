const os = require('os')
const memoriaDisponivel = os.totalmem()
const calculo = memoriaDisponivel/ (1024**3) 

console.log(`A memória livre é: ${calculo.toFixed(2)} GB`)