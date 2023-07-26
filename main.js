var lista = []
function submit() {
  var aluno1 = document.getElementById('nameOfTheStudent1').value
  var aluno2 = document.getElementById('nameOfTheStudent2').value
  var aluno3 = document.getElementById('nameOfTheStudent3').value
  var aluno4 = document.getElementById('nameOfTheStudent4').value

  lista.push(aluno1)
  lista.push(aluno2)
  lista.push(aluno3)
  lista.push(aluno4)
  console.log(lista)

  document.getElementById('displayName').innerHTML = lista
}
