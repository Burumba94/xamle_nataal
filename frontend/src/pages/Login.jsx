import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({ email: '', password:'' });
    const [ error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        //API to connecte a user
        try {
            const res = await fetch("http://localhost:5026/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if(!res.ok) throw new Error(data.message);

            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md brightness-75"
                style={{ backgroundImage: "url('/login-bg.jpg')" }}>
            </div>

            <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg backdrop-blur-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6"> Connexion </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email" name="email" placeholder="Email"
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-500"
                        onChange={handleChange} required
                    />
                    <input  
                        type="password" name="password" placeholder="Mot de passe"
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-bg-gray-500"
                        onChange={handleChange} required
                    />
                    <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-lg">
                        Se connecter
                    </button>
                </form>
                <p className="text-center text-gray-700 mt-4">
                    Pas encore de compte ? <a href="/register" className="text-gray-900 font-semibold"> Inscrivez-vous </a>
                </p>
            </div>
        </div>
    );
};

export default Login;