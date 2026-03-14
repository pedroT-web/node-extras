const os = require('os')

const minutos = os.uptime() / 60
console.log(`Minutos Ligado: ${minutos.toFixed(2)}`)

const horas = minutos / 60
console.log(`Horas Ligadas: ${horas.toFixed(2)}`)