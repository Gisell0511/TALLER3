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

    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
    
      <div className="w-full bg-blue-500 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Descubre Imágenes Increíbles</h1>
        <p className="mt-2 text-lg">Explora, busca y descarga imágenes de alta calidad fácilmente.</p>
      </div>
  
    
      <div className="mt-8 bg-white shadow-md rounded-lg p-8 max-w-md w-full border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Encuentra Imágenes
        </h2>
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
  
    
      <div className="mt-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        
        {[
          {
            src: "https://tse1.mm.bing.net/th?id=OIP.4QAehpA9X8y6Kn6DoFR71AHaEo&pid=Api&P=0&h=180",
            label: "Naturaleza",
          },
          {
            src: "https://miro.medium.com/v2/resize:fit:1200/1*ucL7YQ2v8aaOy426soLPZA.png",
            label: "Tecnología",
          },
          {
            src: "https://placepic.ru/wp-content/uploads/2018/11/21767-1024x640.jpg",
            label: "Gatitos",
          },
        ].map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.label}
              className="rounded-lg shadow-lg w-full h-48 object-cover" 
            />
            <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-60 px-2 py-1 rounded">
              {image.label}
            </p>
          </div>
        ))}
      </div>
  
    
      <footer className="w-full bg-gray-800 text-white mt-12 p-4 text-center">
        <p>&copy; 2024 Descubre Imágenes. Todos los derechos reservados.</p>
      </footer>
  </div>
  

  );
}

export default Home;

