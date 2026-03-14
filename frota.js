let carros = [
    { marca: 'FORD', modelo: 'Fiesta' },
    { marca: "FIAT", modelo: "Uno" }
]


function fnListarCarros(){
    carros.forEach(carro => {
        console.log(carro.marca + " - " + carro.modelo)
    })
}

function fnCadastrarCarro(carro){
    carros.push(carro)
    console.log("Cadastrado Com Sucesso!!!")

}

exports.fnListarCarros = fnListarCarros
exports.fnCadastrarCarro = fnCadastrarCarro