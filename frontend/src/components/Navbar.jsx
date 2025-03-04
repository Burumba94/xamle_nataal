import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-blue-900 text-whited p-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold text-gray-300">
                <Link to="/"> Xamle Nataal </Link>
            </h1>

            <div className="hidden md:flex space-x-6 text-gray-300 p-4 justify-between items-center">
                <Link to="/" className="hover:text-blue-600"> Acceuil </Link>
                <Link to="/photographers" className="hover:text-blue-600"> Photographes </Link>
                <Link to="/events" className="hover:text-blue-600"> Evenements </Link>
                <Link to="/shop" className="hover:text-blue-600"> Boutique </Link>
                <Link to="/contact" className="hover:text-blue-600"> Contact </Link>
            </div>

            <div className="hidden md:flex space-x-4">
                <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded"> S'inscrire </Link>
                <Link to="/login" className="bg-gray-800 text-white px-4 py-2 rounded"> Se connecter </Link>
            </div>

            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>

                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden">
                        <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Accueil</Link>
                        <Link to="/photographers" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Photographes</Link>
                        <Link to="/events" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Événements</Link>
                        <Link to="/shop" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Boutique</Link>
                        <Link to="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
                        <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setIsOpen(false)}> S'inscrire </Link>
                        <Link to="/login" className="bg-gray-800 text-white px-4 py-2 rounded" onClick={() => setIsOpen(false)}> Se connecter </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;