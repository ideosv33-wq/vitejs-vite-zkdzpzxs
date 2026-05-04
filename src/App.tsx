import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pagina1 from './pages/Pagina1';
import Restaurantes from './pages/Restaurantes';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pagina1" element={<Pagina1 />} />
        <Route path="/Restaurantes" element={<Restaurantes />} />
      </Routes>
    </BrowserRouter>
  );
}