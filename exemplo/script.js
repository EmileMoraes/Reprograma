var entrada = document.querySelector('input')

var saida = document.querySelector('#respostaAno')
saida.textContent = ano

function cliquei(){
    var ano = entrada.value
    console.log(ano)
    saida.textContent = ano
}
