
import { useState, useEffect } from 'react';
import MiBoton from '../components/MiBoton';
import { Link } from 'react-router-dom';
import type { iRestaurante } from '../types';

function Restaurantes() {

// 1. La "Pizarra" (Memoria) Aquí guardaremos los datos Empezamos con un array vacío []. lo colocamos fuera dek useEffect porque necesitamos persistencia, useEffect dispara algo y se va ( a no ser que lo guarde)
const [_listaRestaurantes, _setListaRestaurantes] = useState<iRestaurante[]>([]);

// 2. El "Disparador" (Efecto)
// Este bloque se ejecuta una sola vez cuando la página termina de cargar.
useEffect(() => {
  console.log("¡La Home se cargó! El contenedor está listo y esperando datos.");
  
  // Aquí es donde en el siguiente paso pondremos el "fetch" para ir a MockAPI.

}, []);

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
        ¡restaurantes!
      </h1>
      
      <p>Si ves este texto sobre fondo celeste, lo logramos.</p>

      <Link to="/"> <MiBoton texto="volver a la home" /> </Link>

      <MiBoton texto="perro" />
      <MiBoton texto="gato"/>

    </div>
  );
}

export default Restaurantes; // ESTA LÍNEA ES CLAVE