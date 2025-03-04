import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import animationData from '../assets/Animation - 1738163008984.json';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
             
            <div className="absolute inset-0 -z-10">
                <Lottie animationData={animationData} loop autoPlay className="w-full h-full object-cover" />
            </div>
            
            
            <div className="text-center p-8 bg-white bg-opacity-60 rounded-2xl shadow-xl backdrop-blur-md">
                <h1 className="text-5xl font-extrabold text-blue-900 drop-shadow-lg">Bienvenue sur Xamle Nataal</h1>
                <p className="text-lg text-green-700 mt-4 drop-shadow-md">La plateforme pour découvrir et partager l'art de la photographie locale.</p>
            </div>
            
            
            
        </div>
    );
};

export default Home;
