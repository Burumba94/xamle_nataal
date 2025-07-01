import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a2540] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-wide text-white hover:text-green-400">
              Xamle Nataal
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-400 transition">Accueil</Link>
            <Link to="/photographes" className="hover:text-green-400 transition">Photographes</Link>
            <Link to="/events" className="hover:text-green-400 transition">Événements</Link>
            <Link to="/messages" className="hover:text-green-400 transition">Messages</Link>
            <Link to="/login" className="bg-green-500 px-4 py-1 rounded hover:bg-green-600 transition">Connexion</Link>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu mobile">
              {isOpen ? <XIcon className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a2540] px-4 py-4 space-y-3 text-center">
          <Link to="/" className="block hover:text-green-400">Accueil</Link>
          <Link to="/photographes" className="block hover:text-green-400">Photographes</Link>
          <Link to="/events" className="block hover:text-green-400">Événements</Link>
          <Link to="/messages" className="block hover:text-green-400">Messages</Link>
          <Link to="/login" className="block bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">Connexion</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
