
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ApiResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      const fetchImages = async () => {
        setLoading(true); 
        try {
          const response = await fetch(
            `https://pixabay.com/api/?key=37695726-e424a8d888049dabd0aef8680&q=${encodeURIComponent(query)}&image_type=photo`
          );
          const data = await response.json();
          setResults(data.hits);
        } catch (error) {
          console.error("Error fetching images:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchImages();
    }
  }, [query]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Resultados </h2>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.length > 0 ? (
            results.map((image) => (
              <div key={image.id} className="rounded-lg overflow-hidden shadow-lg">
                <img src={image.webformatURL} alt={image.tags} className="w-full h-48 object-cover" />
                <div className="p-2">
                  <p className="text-gray-600 text-sm">{image.tags}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron resultados</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ApiResults;


