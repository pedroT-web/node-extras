// setTimeout(function(){
//     console.log("agendamento")
// },2000)


let contador = 0
function mensagem(){
    contador++
    console.log(contador)
    console.log("agendado")
    if(contador == 10){
        clearInterval(intervalo)
    }
}

const intervalo = setInterval(function(){
    mensagem()
},1000)


// function mensagem(){
//     console.log("agendamento")
// }