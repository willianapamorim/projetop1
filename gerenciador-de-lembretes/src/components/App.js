import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';

const App = () => {
  // Define o estado lembretes e a função setLembretes
  const [lembretes, setLembretes] = useState([]);

  // Função para adicionar um novo lembrete ao estado
  const adicionarLembrete = (novoLembrete) => {
    setLembretes([...lembretes, novoLembrete]);
  };

  //função para remover um lembrete
  const removerLembrete = (index) => {
    const novosLembretes = [...lembretes];
    novosLembretes.splice(index, 1);
    setLembretes(novosLembretes);
  };

  // Renderiza o componente App
  return (
    <div className='container'>
      <div 
        className="border mt-5 px-3 py-4 rounded" 
        style={{ minHeight: '200px' }}
      >
        <LembreteLista lembretes={lembretes} onRemoverLembrete={removerLembrete} />
      </div>

      <div className="row mt-4">
        <div className="col-sm">
          <LembreteEntrada onAdicionarLembrete={adicionarLembrete} />
        </div>
      </div>
    </div>   
  );
};

export default App;
