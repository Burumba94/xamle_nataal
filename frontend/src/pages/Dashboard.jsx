import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/login");
    }, [navigate]);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4"> Tableau de bord </h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded shadow">
                    <h2 className="text-xl font-semibold"> Mes Photos </h2>
                    <p> Gérez vos photos ici. </p>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow">
                    <h2 className="text-xl font-semibold"> Evénements </h2>
                    <p> Planifiez vos événements photos. </p>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow">
                    <h2 className="text-xl font-semibold"> Messages </h2>
                    <p> Communiquez avec vos clients. </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;