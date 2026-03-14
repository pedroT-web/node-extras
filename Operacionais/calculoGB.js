const os = require('os')

const memoriaLivre = os.freemem() / (1024 ** 3)

console.log(`A memória livre é: ${memoriaLivre.toFixed(2)} GB`)