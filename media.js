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
const botaoSituacaoAluno = document.getElementById("calcularMedia")

function calcularMedia() {

  let nota1 = parseFloat (document.querySelector("#num1Soma").value)
  let nota2 = parseFloat (document.querySelector("#num1Soma").value)
  let nota3 = parseFloat (document.querySelector("#num1Soma").value)
  let nota4 = parseFloat (document.querySelector("#num1Soma").value)

  let media = (nota1 + nota2 + nota3 + nota4)/4

  if media = 0 , "Infelizmente você zerou a prova :( "
  else if >=0 && <=3, "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente"
}
