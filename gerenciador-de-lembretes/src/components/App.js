import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';

const App = () => {

  return (
    <div className='container'>
      <div 
      className="border mt-5 px-3 py-4 rounded" 
      style={{ minHeight: '200px' }}
      >
        <LembreteLista text="Preparar aula de programação" />
        <LembreteLista text="Fazer feira" />
        <LembreteLista text="Preparar Marmitas" />
      </div>

      <div className="row mt-4">
        <div className="col-sm">
          <LembreteEntrada />
        </div>
      </div>
    </div>   
  );
}

export default App;

