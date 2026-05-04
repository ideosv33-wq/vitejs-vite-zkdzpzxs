interface Props {
  texto: string;
  alClick: () => void;
}

function MiBoton({ texto}: Props) {
  return (
    <button 
      style={{ backgroundColor: 'skyblue', margin: '20px', padding: '15px 30px'
     }}
    >
    {texto}  
    </button>
  );
}
export default MiBoton;