class Interface{
  constructor(){
    throw new Error("Interface é uma classe abstrata e não pode ser instanciada.");
  }
  
static salvar() {
  let nome = document.getElementById('nome').value;
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);
  let n3 = Number(document.getElementById('n3').value);
  let aluno = new Aluno(nome, n1, n2, n3);
  let m = aluno.gerarMedia(n1, n2, n3);
  aluno.gerarEstado(m);
  
  alert('aluno cadastrado');
  return aluno;
}
static listar(alunos) {
  const btnCadastrar = document.getElementById('btn-cadastrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  const btnListar = document.getElementById('btn-listar');
  const tabListar = document.getElementById('tab-listar');

  btnListar.classList.add('active');
  btnCadastrar.classList.remove('active');

  // Ajusta o conteúdo visível
  tabListar.classList.add('active');
  tabCadastrar.classList.remove('active');
  let lista = '<table>';
  lista += '<tr><th>Nome</th><th>Média</th><th>Situação</th></tr>';
  for (let i = 0; i < alunos.length; i++) {
    lista += '<tr>';
    lista += '<td>' + alunos[i].nome + '</td>';
    lista += '<td>' + alunos[i].media + '</td>';
    lista += '<td>' + alunos[i].estado + '</td>';
    lista += '</tr>';
  }
  lista += '</table>';
  document.getElementById('alunos').innerHTML = lista;
}

static cadastrar() {
  const btnCadastrar = document.getElementById('btn-cadastrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  const btnListar = document.getElementById('btn-listar');
  const tabListar = document.getElementById('tab-listar');

  btnListar.classList.remove('active');
  btnCadastrar.classList.add('active');

  // Ajusta o conteúdo visível
  tabListar.classList.remove('active');
  tabCadastrar.classList.add('active');
  //document.getElementById("media").innerHTML = m;
}
}
