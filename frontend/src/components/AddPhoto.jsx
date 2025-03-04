import { useState } from 'react';

const AddPhoto = ({ userId }) => {
    const [form, setForm] = useState({ title: '', imageUrl: '', description: '' });

    //Gestion des changements dans le formulaire
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    //Soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); //empêche le chargement de la page
        try {
            //envoi des données vers l'API
            const res = await fetch('/api/photo/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, userId }) // ajout de l'ID user
            });
            const data = await res.json(); //réponse du serveur
            console.log('Photo ajoutée avec succès:', data);
        } catch (err) {
            console.error('Erreur lors de l/ajout:', err);
        }
    };

    return  (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Titre" value={form.title} onChange={handleChange} />
            <input name="imageUrl" placeholder="URL de l'image" value={form.imageUrl} onChange={handleChange} />
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
            <button type="submit"> Ajouter </button>
        </form>
    );
};

export default AddPhoto;