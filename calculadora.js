
const botaoSomar = document.getElementById("somar")
const botaoSubtrair = document.getElementById("subtrair")
const botaoMultiplicar = document.getElementById("multiplicar")
const botaoDividir = document.getElementById("dividir")

function somar() {
    let num1 = parseFloat (document.querySelector("#num1Soma").value)
    let num2 = parseFloat (document.querySelector("#num2Soma").value)

    let resultado = num1 + num2

    if (isNaN(num1) || isNaN(num2)) {
        alert("Valor fora do domínio da função. Informe um número válido.")
    } else {
        document.getElementById ("resultadoSoma").innerHTML = resultado
    }
}

function subtrair() {
    let num1 = parseFloat (document.querySelector("#num1Sub").value)
    let num2 = parseFloat (document.querySelector("#num2Sub").value)

    let resultado = num1 - num2

    if (isNaN(num1) || isNaN(num2)) {
        alert("Valor fora do domínio da função. Informe um número válido.")
    } else {
        document.getElementById ("resultadoSub").innerHTML = resultado
    }
}

function multiplicar() {
    let num1 = parseFloat (document.querySelector("#num1Mult").value)
    let num2 = parseFloat (document.querySelector("#num2Mult").value)

    let resultado = num1 * num2

    if (isNaN(num1) || isNaN(num2)) {
        alert("Valor fora do domínio da função. Informe um número válido.")
    } else {
        document.getElementById ("resultadoMult").innerHTML = resultado
    }
}

function dividir() {
    let num1 = parseFloat (document.querySelector("#num1Div").value)
    let num2 = parseFloat (document.querySelector("#num2Div").value)

    let resultado = num1 / num2

    if (isNaN(num1) || isNaN(num2) || (num2 === 0)) {
        alert("Valor fora do domínio da função. Informe um número válido.")
    }
    else {
        document.getElementById ("resultadoDiv").innerHTML = (resultado)
    }
}

botaoSomar.addEventListener ('click', somar)
botaoSubtrair.addEventListener ('click', subtrair) 
botaoMultiplicar.addEventListener ('click', multiplicar) 
botaoDividir.addEventListener ('click', dividir) 