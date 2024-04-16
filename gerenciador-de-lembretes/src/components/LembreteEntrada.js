import React, { useState } from 'react';

const LembreteEntrada = ({ onAdicionarLembrete }) => {
  
  // Define o estado novoLembrete e a função setNovoLembrete
  const [novoLembrete, setNovoLembrete] = useState('');

  // Função para lidar com a adição de um novo lembrete
  const handleAdicionarLembrete = () => {

    // Verifica se o novo lembrete não está vazio após remover os espaços em branco
    if (novoLembrete.trim()) {

      // Chama a função 'onAdicionarLembrete' passando o novo lembrete como argumento
      onAdicionarLembrete(novoLembrete);

      // Limpa o estado 'novoLembrete' após adicionar o lembrete
      setNovoLembrete('');
    }
  };

  // Renderiza o componente LembreteEntrada
  return (
    <div>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Digite seu novo lembrete"
        value={novoLembrete}
        onChange={(event) => setNovoLembrete(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary btn-block w-100"
        onClick={handleAdicionarLembrete}
      >
        OK
      </button>
    </div>
  );
};

export default LembreteEntrada;
