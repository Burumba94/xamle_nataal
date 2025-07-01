import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import animationData from '../assets/Animation - 1738163008984.json';

const Home = () => {
  return (
    <div className="relative bg-[#0a2540] min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-6">
      {/* Animation de fond Lottie */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Lottie animationData={animationData} loop autoPlay className="w-full h-full object-cover" />
      </div>

      {/* Contenu principal */}
      <div className="z-10 max-w-4xl w-full text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Xamle Nataal
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Capturez, exposez, et partagez la beauté de la photographie locale.
        </p>
        <p className="text-md text-green-400 font-medium max-w-xl mx-auto">
          La plateforme qui connecte les talents photographiques du Sénégal avec le monde.
        </p>

        {/* Appels à l'action */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-lg"
          >
            S'inscrire
          </Link>
          <Link
            to="/login"
            className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-lg"
          >
            Se connecter
          </Link>
        </div>
      </div>

      {/* Footer simplifié */}
      <div className="z-10 absolute bottom-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Xamle Nataal. Tous droits réservés.
      </div>
    </div>
  );
};

export default Home;
