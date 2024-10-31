import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      
      navigate(`/results?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Fondo gris claro */}
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full mx-4 border border-gray-300"> 
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Encuentra Imágenes
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Ingresa un término de búsqueda y descubre imágenes de alta calidad.
        </p>

        <form onSubmit={handleSearch} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Ej. naturaleza, tecnología..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Buscar Imágenes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;

