import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ApiResults from './pages/ApiResults';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} /> {/*  como página inicial */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/results" element={<ApiResults />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} /> {/* Ruta 404 */}
      </Routes>
    </Router>
  );
}

export default App;



