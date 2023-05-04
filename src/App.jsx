
import './styles/App.css';
import Testimonio from './components/Testimonio'


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>        
        <h1>Titulo Principal de la APP</h1>
        <Testimonio 
          nombre='Nami'
          pais='Suecia'
          imagen='emma'
          cargo='Navegante'
          empresa='Mugiwaras'
          testimonio="bery bery <3"
        />
        <Testimonio 
          nombre='Zoro'
          pais='Japon'
          imagen='shawn'
          cargo='Espadachin'
          empresa='Mugiwaras'
          testimonio="Sake <3"
        />
        <Testimonio 
          nombre='Robin '
          pais='Rusia'
          imagen='sarah'
          cargo='Arqueologa'
          empresa='Mugiwaras'
          testimonio="una frase tenebrosa"
        />
      </div>
    </div>
  );
}

export default App;

