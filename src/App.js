import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [tarefas, setarTarefas] = useState([]);
  const [horaaInicio, setarHoraInicio] = useState([]);
  const [horaaFinal, setarHoraFinal] = useState([]);
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
        finalizada: false
      }
    ]);

    setarHoraInicio([
      ...horaaInicio,
      {
        id: new Date().getTime(),
        horaInicio: horaInicio.value,
        finalizada: false
      }
    ]);

    setarHoraFinal([
      ...horaaFinal,
      {
        id: new Date().getTime(),
        horaFinal: horaFinal.value,
        finalizada: false
      }
    ]);

    setModal(false);

  }
  const abrirModal = () => {
    setModal(!modal);
  }


  const marcarConcluida = (id) => {
    let novasTarefas = tarefas.filter(function (val) {
      if (val.id == id) {
        val.finalizada = true;
      }
      return val;
    })

    setarTarefas(novasTarefas);

  }

  const marcarConcluidaHoraI = (id) => {
    let novasTarefasHI = horaaInicio.filter(function (val) {
      if (val.id == id) {
        val.finalizada = true;
      }
      return val;
    })

    setarTarefas(novasTarefasHI);

  }
  const marcarConcluidaHoraF = (id) => {
    let novasTarefasHF = horaaFinal.filter(function (val) {
      if (val.id == id) {
        val.finalizada = true;
      }
      return val;
    })

    setarTarefas(novasTarefasHF);

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
              <p>Informe o horario de inicio</p>
              <input id="content-tarefa-horario-inicio" type="text" />
              <p>Informe o horario final</p>
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
        <h3>Tarefas que desejo realizar durante o dia:</h3>
        {
          tarefas.map((val) => {
            if (!val.finalizada) {
              return (
                <p onClick={() => marcarConcluida(val.id)}> Tarefa: {val.tarefa}</p>
              )
            } else {
              return (
                <p onClick={() => marcarConcluida(val.id)} style={{ textDecoration: 'line-throgh' }}>Tarefa: {val.tarefas}</p>
              );
            }
          })}
        {horaaInicio.map((val) => {
          if (!val.finalizada) {
            return (
              <p onClick={() => marcarConcluidaHoraI(val.id)}>Hora inicio: {val.horaInicio}</p>
            )
          } else {
            return (
              <p onClick={() => marcarConcluidaHoraI(val.id)} style={{ textDecoration: 'line-throgh' }}>Hora inicio: {val.horaInicio}</p>
            );
          }
        })}
        {horaaFinal.map((val) => {
          if (!val.finalizada) {
            return (
              <p onClick={() => marcarConcluidaHoraF(val.id)}>Hora final: {val.horaFinal}</p>
            )
          } else {
            return (
              <p onClick={() => marcarConcluidaHoraF(val.id)} style={{ textDecoration: 'line-throgh' }}>Hora final: {val.horaFinal}</p>
            );
          }
        })
        }

      </div>

    </div>
  );
}

export default App;
