/*
  Calcular a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
const btSituacaoAluno = document.getElementById("btSituacaoAluno")

function calcularMedia() {

      let nota1 = parseFloat (document.querySelector("#nota1").value)
      let nota2 = parseFloat (document.querySelector("#nota2").value)
      let nota3 = parseFloat (document.querySelector("#nota3").value)
      let nota4 = parseFloat (document.querySelector("#nota4").value)

      let media = (nota1 + nota2 + nota3 + nota4)/4
      let mensagem = ""

      if (media ===0) {mensagem = (`Sua média é ${media}. Infelizmente você está reprovado`)
        } else if (media <= 3) {mensagem = (`Caramba, deu ruim, você obteve media ${media}! Estude mais!`)
        } else if (media < 6) {mensagem = (`Você obteve media ${media}! Faltou pouco para a média. Estude mais e tente novamente!`)
        } else if (media <= 7) {mensagem = (`Você está na média! Sua nota é ${media}!`)
        } else if (media < 10) {mensagem = (`Notão! Sua média é ${media}!`)
        } else if (media === 10) {mensagem = "Aluno nota 10! Parabéns você está aprovado!"
        } else {mensagem = ("Verifique os dados inseridos")
      }


  const situacaoAluno = document.createElement ("p")
  const divmedias = document.getElementById("contentCalcMedias")
  divmedias.appendChild(situacaoAluno).innerText= mensagem
}

btSituacaoAluno.addEventListener ('click', calcularMedia)
