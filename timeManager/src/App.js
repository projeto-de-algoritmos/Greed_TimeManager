import { useState } from 'react';
import './App.css';

//função criada para representar uma tarefa na hora de ser instanciada
function tarefaCompleta(tarefa, horaInicio, horaFinal) {
  this.tarefa = tarefa;
  this.horaInicio = horaInicio;
  this.horaFinal = horaFinal;
}

function App() {

  //cria constante para criar um modal que possibilita a troca de telas
  const [modal, setModal] = useState(false);
  var listaTarefas = [];

  //função que implementa o intervalo de scheduling
  const scheduling = () => {
    var listaTarefas_final = [];
    var aux = 0;

    if(listaTarefas.length>1){
      
      listaTarefas.sort(ordenaPorHoraFinal);

      console.log(listaTarefas);

      listaTarefas_final.push(listaTarefas[listaTarefas.length - 1]);

      for (var i = 0; i < listaTarefas.length - 1; i++) {

        if (listaTarefas[i].horaInicio<=listaTarefas_final[aux].horaFinal) {
          listaTarefas_final.push(listaTarefas[i]);
          aux++;
        }

      }
      listaTarefas_final.sort(ordenaPorHoraFinal);
      document.getElementById("display").innerHTML = JSON.stringify(listaTarefas_final, ['tarefa']);
    }
  }

  //função que ordena o array pela hora final
  function ordenaPorHoraFinal(a, b) {
    return a.horaFinal - b.horaFinal;
  }

  //função que pega os dados da tela e armazade em um array
  const salvarTarefa = () => {
    var tarefa = document.getElementById('content-tarefa');
    var horaInicio = document.getElementById('content-tarefa-horario-inicio');
    var horaFinal = document.getElementById('content-tarefa-horario-fim');
    var tarefaCompleta_aux = new tarefaCompleta(tarefa.value, horaInicio.value, horaFinal.value);

    listaTarefas.push(tarefaCompleta_aux);
    
    alert("Tarefa Adicionada");
    scheduling();
  }

  //função para sair da modal da tela de informações, além disso, ele reseta o valor do array.
  const sairTarefa = () => {
    
    setModal(!modal);

  }
  const abrirModal = () => {
    setModal(!modal);
  }
  //parte em html da aplicação
  return (
    <div className="App">
      {
        modal ?
          <div className="modal">
            <div className="modalContent">
              <h4>TAREFA</h4>
              <p>Informe sua tarefa aqui</p>
              <input id="content-tarefa" type="text" />
              <p>Informe o horario de inicio (hh)</p>
              <input id="content-tarefa-horario-inicio" type="text" />
              <p>Informe o horario final (hh)</p>
              <input id="content-tarefa-horario-fim" type="text" />
              <div className='resultados'>
                <p>Tarefas a serem realizadas:</p>
                <pre id="display"></pre>
              </div>              
              <div className='button'>
                <button className="buttonAdicionar" onClick={() => salvarTarefa()}>Adicionar</button>
                <button onClick={() => sairTarefa()}>Sair</button>
              </div>
            </div>
          </div>
          :
          
      <div>
      <div className='titulo'><p className='name'>Time Manager</p></div>
      <div onClick={() => abrirModal()} className='addTarefas'>
      </div>
      </div>
      }
      
    </div>
  );
}
export default App;
