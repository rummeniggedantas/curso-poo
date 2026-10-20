let turma = [];
document.getElementById("btn-salvar").addEventListener("click", armazenar);

document.getElementById("btn-listar").addEventListener("click", abaListar);

document.getElementById("btn-cadastrar").addEventListener("click", abaCadastro);


function armazenar(){
  
  // 1. Captura os dados da tela usando a classe utilitária estática
  const novoAluno = Interface.salvar();
  
  // 2. Cria a instância real do Aluno com os dados capturados
  //const novoAluno = new Aluno(dados.nome, dados.email, dados.matricula);
  
  // 3. Salva no seu array/banco
  turma.push(novoAluno);
  
  // 4. Usa a classe estática novamente para atualizar a tela e limpar os campos
}

function abaListar(){
 Interface.listar(turma);
}

function abaCadastro(){
  Interface.cadastrar();
}