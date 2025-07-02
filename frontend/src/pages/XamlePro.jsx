import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const XamlePro = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Suppose qu'on a stocké l'utilisateur dans localStorage à la connexion
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserId(user._id);
    }
  }, []);

  const handleUpgrade = async () => {
    try {
      const res = await fetch(`http://localhost:5026/api/users/upgrade/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (res.ok) {
        const data = await res.json();
        alert("Bienvenue parmi les membres Xamle Pro !");
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        alert("Échec de l'activation du compte Pro");
      }
    } catch (err) {
      console.error(err);
      alert("Une erreur est survenue !");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a2540] text-white px-6 py-16 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Passez à Xamle Pro</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
        Débloquez toutes les fonctionnalités de la plateforme, obtenez plus de visibilité et vendez sans limites.
      </p>

      <div className="bg-white text-[#0a2540] rounded-xl shadow-xl p-6 max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4">Avantages de Xamle Pro :</h2>
        <ul className="list-disc list-inside text-left space-y-2">
          <li>✔️ Profil professionnel vérifié</li>
          <li>✔️ Galerie illimitée</li>
          <li>✔️ Priorité sur la page d’accueil</li>
          <li>✔️ Statistiques d’audience</li>
          <li>✔️ Zéro commission sur les ventes</li>
          <li>✔️ Accès aux événements sponsorisés</li>
        </ul>
        <div className="mt-8">
          <button
            onClick={handleUpgrade}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Devenir membre Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default XamlePro;
