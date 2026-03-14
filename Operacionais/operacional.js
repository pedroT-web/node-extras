const os = require('os')

console.log("\nRetorna um string que identifica a arquitetura, como arm, x64, arm64.")
console.log("=========================")
console.log("Resultado: ")
console.log(os.arch())

console.log("\n\nRetorna informações sobre as CPUs disponíveis no seu sistema.")
console.log("=========================")
console.log("Resultado: ")
console.log(os.cpus())

console.log("\n\nRetorna o número de bytes que representam a memória livre no seu sistema.")
console.log("=========================")
console.log("Resultado: ")
console.log(os.freemem())

console.log("\n\nRetorna a plataforma em que o Node.js foi compilado.")
console.log("=========================")
console.log("Resultado: ")
console.log(os.platform())

console.log("\n\nRetorna o número de bytes que representam o total de momória disponível no sistema.");
console.log("=========================")
console.log("Resultado: ")
console.log(os.totalmem())

console.log("\n\nIdentifica o sistema operacional")
console.log("=========================")
console.log("Resultado: ")
console.log(os.type())

console.log("\n\nVersão do sistema operacional")
console.log("=========================")
console.log("Resultado: ")
console.log(os.version())

console.log("\n\nRetorna um objeto contendo o username corrente, uid, gid, shell, e homedir.")
console.log("=========================")
console.log("Resultado: ")
console.log(os.userInfo())

console.log("\n\nRetorna o host name.")
console.log("=========================")
console.log("Resultado: ")
console.log(os.hostname())

console.log("\n\nRetorna o número de segundos em que o computador está rodando desde o último reinício")
console.log("=========================")
console.log("Resultado: ")
console.log(os.uptime())