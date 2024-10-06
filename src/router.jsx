// src/router.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Huellas from './pages/Huellas';
import Soluciones from './pages/Soluciones';
import Curiosidades from './pages/Curiosidades'
import NotFound from './pages/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/huellas" element={<Huellas />} />
        <Route path="/soluciones" element={<Soluciones />} />
        <Route path="/curiosidades" element={<Curiosidades />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
