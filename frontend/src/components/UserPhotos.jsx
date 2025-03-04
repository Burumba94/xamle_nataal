import { useEffect, useState } from 'react';

const UserPhotos = ({ userId }) => {
    const [photos, setPhotos] = useState([]); //Etat pour stocker les photos

    //Récupération des photos depuis l'API 
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await fetch(`api/photo/${userId}`);
                const data = await res.json();
                setPhotos(data); //Mise à jour de l'état
            } catch (err) {
                console.error('Erreur lors de la récupération:', err);
            }
        };
        fetchPhotos();
    }, [userId]);

    return (
        <div>
            <h2> Mes Photos </h2>
            <div>
                {photos.map((photo) => (
                    <div key={photo._id}>
                        <h3> {photo.title} </h3>
                        <img src={photo.imageUrl} alt={photo.title} style={{ width: '200px' }} />
                        <p> {photo.description} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPhotos;