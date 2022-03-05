import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [tarefas, setarTarefas] = useState([]);
  const [modal, setModal] = useState(false);

  const salvarTarefa = () => {
    var tarefa = document.getElementById('content-tarefa');
    var horaInicio = document.getElementById('content-tarefa-horario-inicio');
    var horaFinal = document.getElementById('content-tarefa-horario-fim');
    setarTarefas([
      ...tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        horaInicio: horaInicio.value,
        horaFinal: horaFinal.value,
        finalizada: false
      }
    ]);
    setModal(false);

  }
  const abrirModal = () => {
    setModal(!modal);
  }

  const scheduling = () => {
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
              <p>Informe o horario de inicio (hh:mm)</p>
              <input id="content-tarefa-horario-inicio" type="text" />
              <p>Informe o horario final (hh:mm)</p>
              <input id="content-tarefa-horario-fim" type="text" />
              <button className="buttonAdicionar" onClick={() => salvarTarefa()}>Adicionar</button>
            </div>
          </div>
          :
          <div></div>
      }
      <h1>Time Manager</h1>
      <div onClick={() => abrirModal()} className='addTarefas'>
      </div>
      <div className='boxTarefas'>
        <h3>Tarefas que desejo realizar durante o dia</h3>
        {
          tarefas.map((val) => {
            return <p>Tarefa a ser realizada: {val.tarefa} | horário inicio: {val.horaInicio} | horário final: {val.horaFinal}</p>
          })}
      <div className='boxButton'>
        <button className='buttonAtivaScheduling' onClick={() => scheduling()}>Saber quais tarefas realizar</button>
      </div>
      </div>
    </div>
  );
}

export default App;
