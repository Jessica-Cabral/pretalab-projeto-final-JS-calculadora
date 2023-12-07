const btSituacaoAluno = document.getElementById("btSituacaoAluno")

function calcularMedia() {

  let nota1 = parseFloat (document.querySelector("#nota1").value)
  let nota2 = parseFloat (document.querySelector("#nota2").value)
  let nota3 = parseFloat (document.querySelector("#nota3").value)
  let nota4 = parseFloat (document.querySelector("#nota4").value)

  let media = (nota1 + nota2 + nota3 + nota4)/4
  let mensagem = ""

  if (media ===0) {
    mensagem = `Reprovado! Você zerou todas as provas. Média: ${media}.`;
  } else if (media <= 3) {
    mensagem = `Caramba, deu ruim, você reprovou! Sua média foi ${media}! Estude mais!`;
  } else if (media < 6) {
    mensagem = `Reprovado! Você obteve media ${media}! Faltou pouco para a média. Estude mais!`;
  } else if (media <= 7) {
    mensagem = `Atenção! Aprovado na média! Média: ${media}!`;
  } else if (media < 10) {
    mensagem = `Notão! Parabéns! Você foi aprovado. Média: ${media}!`;
  } else if (media === 10) {
    mensagem = `Uau! ${media} de média. Parabéns você foi aprovado!`;
  } else {
    mensagem = "Verifique os dados inseridos";
  }
  
  const situacaoAluno = document.createElement ("p")
  const divmedias = document.getElementById("contentCalcMedias")
  divmedias.appendChild(situacaoAluno).innerText= mensagem

}

btSituacaoAluno.addEventListener ('click', calcularMedia)

