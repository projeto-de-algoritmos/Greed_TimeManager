import { useState } from 'react';
import './App.css';

function tarefaCompleta(tarefa, horaInicio, horaFinal) {
  this.tarefa = tarefa;
  this.horaInicio = horaInicio;
  this.horaFinal = horaFinal;
}

function App() {

  const [modal, setModal] = useState(false);
  var listaTarefas = [];


  const scheduling = () => {
    console.log(listaTarefas);

    listaTarefas.sort(ordenaPorHoraFinal);
    var aux = 0;
    var listaTarefas_final = [];
    
    var horaFinal_aux = listaTarefas[listaTarefas.length - 1].horaFinal;
    console.log(horaFinal_aux);
    if(listaTarefas.length>1){
     for (var i = 0; i < listaTarefas.length; i++) {
        if (listaTarefas[i].horaInicio>=horaFinal_aux) {
          listaTarefas_final.push(listaTarefas[i]);
          horaFinal_aux = listaTarefas[i].horaFinal;
          aux++;
        }
      }
      for (var j = 0; j<listaTarefas_final.length; j++) {
        console.log(listaTarefas_final[j].tarefa);
      }
    }
  }
  
  function ordenaPorHoraFinal(a, b) {
    return a.horaFinal - b.horaFinal;
  }

  const salvarTarefa = () => {
    var tarefa = document.getElementById('content-tarefa');
    var horaInicio = document.getElementById('content-tarefa-horario-inicio');
    var horaFinal = document.getElementById('content-tarefa-horario-fim');
    var tarefaCompleta_aux = new tarefaCompleta(tarefa.value, horaInicio.value, horaFinal.value);

    listaTarefas.push(tarefaCompleta_aux);
    
    console.log(listaTarefas);
    alert("Tarefa Adicionada");
    scheduling();


  }
  const sairTarefa = () => {
    
    setModal(!modal);

  }
  const abrirModal = () => {
    setModal(!modal);
  }
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

