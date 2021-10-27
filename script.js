const ol = document.getElementById('lista-tarefas');
// const myLi = document.querySelectorAll('.lista')

function criarLi() {
  const input = document.getElementById('texto-tarefa');
  const inputValue = input.value;
  const li = document.createElement('li');
  li.className = 'lista';
  li.innerText = inputValue;
  ol.appendChild(li);
  input.value = '';
}

function criarTarefa() {
  const botaoCriar = document.getElementById('criar-tarefa');
  botaoCriar.addEventListener('click', criarLi);
}
criarTarefa();

function cinza(event) {
  const colorCinza = document.querySelector('.selected');
  if (colorCinza) {
    colorCinza.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

ol.addEventListener('click', cinza);

function completed(event) {
  const markCompleted = document.querySelector('.completed');
  if (markCompleted) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
ol.addEventListener('dblclick', completed);

function resetar() {
  const btnReset = document.querySelector('#apaga-tudo');
  btnReset.addEventListener('click', function () {
    const linha = document.querySelectorAll('li');
    for (let i = 0; i < linha.length; i += 1) {
      ol.removeChild(linha[i]);
    }
  });
}
resetar();
