import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        // API to save a user
        try {
            const res = await fetch('http://localhost:5026/api/auth/register', {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(form),
            });
                const data = await res.json();
                if(!res.ok)throw new Error(data.message);

                alert("Inscription réussie !");
                navigate("/dashboard");
            } catch (err) {
                setError(err.message);
            }
    }; 

    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md brightness-75"
                style={{ backgroundImage: "url('/register-bg.jpg')" }}>
            </div>

            <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg backdrop-blur-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-6"> Créer un compte </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text" name="username" placeholder="Nom d'utilisateur"
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange} required
                    />
                    <input
                        type="email" name="email" placeholder="Email"
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange} aria-required
                    />
                    <input 
                        type="password" name="password" placeholder="Mot de passe" 
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange} required
                    />
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
                        S'inscrire
                    </button>
                </form>
                <p className="text-center text-gray-700 mt-4">
                    Déjà un compte? <a href="/login" className="text-blue-600 font-semibold"> Connexion </a>
                </p>
            </div>
        </div>
    );
};

export default Register;