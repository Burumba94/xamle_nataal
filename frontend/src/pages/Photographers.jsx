import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Photographers = () => {
  const [photographers, setPhotographers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhotographers = async () => {
      try {
        const res = await fetch("http://localhost:5026/api/users?role=photographe");
        const data = await res.json();
        setPhotographers(data);
      } catch (err) {
        console.error("Erreur lors du chargement des photographes :", err);
      }
    };

    fetchPhotographers();
  }, []);

  const handleViewCatalog = (photographerId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Vous devez être connecté pour accéder au catalogue.");
      navigate('/login');
    } else {
      navigate(`/photographe/${photographerId}`);
    }
  };

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Nos Photographes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {photographers.map((photographer) => (
          <div
            key={photographer._id}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition"
          >
            <img
              src={photographer.img || "/default-photo.jpg"}
              alt={photographer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 relative">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                {photographer.name}
                {photographer.isPro && (
                  <span className="ml-2 bg-yellow-400 text-[#0a2540] px-2 py-1 rounded-full text-xs font-semibold">
                    PRO
                  </span>
                )}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {photographer.specialty || "Photographe indépendant"}
              </p>
              <button
                onClick={() => handleViewCatalog(photographer._id)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
              >
                Voir son catalogue
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photographers;
