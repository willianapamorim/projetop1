import React from 'react';

// O componente LembreteLista recebe dois props: lembretes e onRemoverLembrete
const LembreteLista = ({ lembretes, onRemoverLembrete }) => {
  return (
    <ul className="list-group">
      {lembretes.map((lembrete, index) => (
        <li key={index} className="list-group-item text-center my-2 border rounded">
          <div className="d-flex justify-content-between align-items-center">
            <span>{lembrete}</span>
            <button 
              className="btn btn-danger"
              onClick={() => onRemoverLembrete(index)}>
              Remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LembreteLista;
