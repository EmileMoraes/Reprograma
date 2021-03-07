var valorHora = document.querySelector('#valor-hora')
var valorHoraProjeto = document.querySelector('#horas-projeto')
var resultado = document.querySelector('#resposta') 

function calcular(){
    var getHora = valorHora.valueAsNumber
    var getHoraProjeto = valorHoraProjeto.valueAsNumber
    var calculo = (getHora*getHoraProjeto).toFixed(2)
    resultado.textContent = "R$ " + calculo + " Esse é o valor do projeto!"
}