
// importaciones
import MiBoton from '../components/MiBoton';
import { Link } from 'react-router-dom';

// nota ; const traerDatos = async () => { logica }; ( esto es una arrow function, permite que no repitas por error una funcion haciendo que su nombre sea constante)


// funcion principal ( cosas de la home )

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
        ¡home!
      </h1>
      
      <p>Si ves este texto sobre fondo celeste, lo logramos.</p>

      <Link to="/pagina1"> <MiBoton texto="Ir a página 1" /> </Link>
      <Link to="/Restaurantes"> <MiBoton texto="Ir a restaurantes" /> </Link>

      <MiBoton texto="perro" />
      <MiBoton texto="gato"/>

    </div>
  );
}

export default App; // ESTA LÍNEA ES CLAVE