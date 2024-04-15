import 'bootstrap/dist/css/bootstrap.min.css';
import LembreteEntrada from './LembreteEntrada';

const App = () => {
  return (
    <div className='container'>
      <div 
      className="border mt-5 px-3 py-4" 
      style={{ minHeight: '200px' }}
      >
      
      </div>

      <div className="row mt-2">
        <div className="col-sm">
          <LembreteEntrada />
        </div>
      </div>
    </div>   
  );
}

export default App;

