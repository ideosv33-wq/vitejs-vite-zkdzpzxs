
// Si tenés el componente en otro archivo, la importación iría acá:
import MiBoton from '../components/MiBoton';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#e0f7fa', 
      minHeight: '100vh', 
      width: '100vw',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ paddingTop: '50px', color: '#006064' }}>
        ¡pagina 1 !
      </h1>
      
      <p>Si ves este texto sobre fondo celeste, lo logramos, pagina 1.</p>
      <Link to="/"> <MiBoton texto="volver a la home" /> </Link>
      <MiBoton texto="perro2" />
      <MiBoton texto="gato2"/>
    </div>
  );
}

export default App; // ESTA LÍNEA ES CLAVE