function criarLi() {
  let input = document.getElementById('texto-tarefa');
  let inputValue = input.value;
  let ol = document.getElementById('lista-tarefas');
  let li = document.createElement('li');
  li.innerText = inputValue;
  ol.appendChild(li);
  input.value = ""
}

function criarTarefa() {
  let botaoCriar = document.getElementById('criar-tarefa')
  botaoCriar.addEventListener('click', criarLi)
}
criarTarefa();
