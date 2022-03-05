import { useEffect, useState } from 'react';
import './App.css';

function tarefaCompleta(tarefa, horaInicio, horaFinal) {
  this.tarefa = tarefa;
  this.horaInicio = horaInicio;
  this.horaFinal = horaFinal;
}

function App() {

  const [modal, setModal] = useState(false);
  var listaTarefas = [];
  var listaTarefaFinal = [];


  const scheduling = () => {
    console.log(listaTarefas);

    // listaTarefas.sort(ordenaPorHoraFinal);
    // var aux = 0;
    // var listaTarefas_final = [];


    // listaTarefas_final.push(listaTarefas[listaTarefas.length - 1]);
    // for (var i = 0; i < listaTarefas.length(); i++) {
    //   if (listaTarefas_final[aux].horaFinal <= listaTarefas[i].horaInicio) {
    //     listaTarefas_final.push(listaTarefas[i]);
    //     aux++;
    //   }
    // }
    // for (var i = 0; listaTarefas_final.length(); i++) {
    //   <p>{listaTarefas_final[i].tarefa}</p>
    // }
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

  }
  const sairTarefa = () => {
    setModal(false);
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
      <h1>Time Manager</h1>
      <div onClick={() => abrirModal()} className='addTarefas'>
      </div>
      <div className='boxTarefas'>
        <h3>Tarefas que desejo realizar durante o dia</h3>
        {listaTarefas.forEach(e=>{
          return <p>{e.horaFinal}</p>;
        })}
      <div className='boxButton'>
        <button className='buttonAtivaScheduling' onClick={() => scheduling()}>Saber quais tarefas realizar</button>
      </div>
      </div>
      </div>
      }
      
    </div>
  );
}
export default App;

