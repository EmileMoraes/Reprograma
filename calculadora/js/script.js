var inputSalario = document.querySelector("#ganho-mes")
var inputHoras = document.querySelector("#horas-dia")
var resultado = document.querySelector('#resposta')


function calcularValorHora(){
    var salario = inputSalario.valueAsNumber
    var horas = inputHoras.valueAsNumber
    var horasPorMes = horas * 22
    var valorHora = (salario/ horasPorMes).toFixed(2)
    resultado.textContent = "R$ " + valorHora
}

