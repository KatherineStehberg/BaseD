import React, { useState } from 'react';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Buscador from './Components/Buscador';
import Alert from './Components/Alert';
import { BaseColaboradores } from './BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtro, setFiltro] = useState('');
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

  const agregarColaborador = nuevoColaborador => {
    setColaboradores(prevColaboradores => [...prevColaboradores, nuevoColaborador]);
    setAlerta({ mensaje: 'Colaborador agregado con éxito', tipo: 'success' });
  };

  const mostrarAlerta = (mensaje, tipo) => {
    setAlerta({ mensaje, tipo });
    setTimeout(() => setAlerta({ mensaje: '', tipo: '' }), 5000);
  };

  const colaboradoresFiltrados = colaboradores.filter(col => {
    return (
      col.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      col.correo.toLowerCase().includes(filtro.toLowerCase()) ||
      col.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
      col.telefono.includes(filtro)
    );
  });

  return (
    <div className="container mt-5">
      {alerta.mensaje && <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />}
      <Buscador setFiltro={setFiltro} />
      <div className="row">
        <div className="col-lg-8">
          <Listado colaboradores={colaboradoresFiltrados} />
        </div>
        <div className="col-lg-4">
          <Formulario agregarColaborador={agregarColaborador} mostrarAlerta={mostrarAlerta} />
        </div>
      </div>
    </div>
  );
}

export default App;