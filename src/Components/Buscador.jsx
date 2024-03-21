// src/components/Buscador.jsx
import React, { useState } from 'react';

const Buscador = ({ setFiltro }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (event) => {
    setBusqueda(event.target.value);
    setFiltro(event.target.value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar colaborador..."
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;