// src/router.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Huellas from './pages/Huellas';
import Retos from './pages/Retos';
import Soluciones from './pages/Soluciones';
import Curiosidades from './pages/Curiosidades';
import Biodiversidad from './pages/Biodiversidad';
import Clima from './pages/Clima';
import Ods from './pages/ODS';
import NotFound from './pages/NotFound';
import { Recursos } from './pages/Recursos';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/huellas" element={<Huellas />} />
        <Route path="/retos" element={<Retos />} />
        <Route path="/soluciones" element={<Soluciones />} />
        <Route path="/curiosidades" element={<Curiosidades />} />
        <Route path="/Biodiversidad" element={<Biodiversidad />} />
        <Route path="/clima" element={<Clima />} />
        <Route path="/ods" element={<Ods />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
