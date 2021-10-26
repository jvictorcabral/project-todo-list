  let ol = document.getElementById('lista-tarefas');


function criarLi() {
  let input = document.getElementById('texto-tarefa');
  let inputValue = input.value;
  let li = document.createElement('li');
  li.className = 'lista';
  li.innerText = inputValue;
  ol.appendChild(li);
  input.value = ""
}

function criarTarefa() {
  let botaoCriar = document.getElementById('criar-tarefa')
  botaoCriar.addEventListener('click', criarLi)
}
criarTarefa();

function cinza(event) {
  let colorCinza = document.querySelector('.selected');
  if (colorCinza) {
colorCinza.classList.remove('selected')
  }
  event.target.classList.add('selected')
}

ol.addEventListener('click', cinza)