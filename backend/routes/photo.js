const express = require('express');
const Photo = require('../models/Photo');
const router = express.Router();

//Ajout d'une nouvelle photo
router.post('/add', async (req, res) => {
    try {
        //Création d'une nouvelle instance de photo
        const newPhoto = new Photo({
            userId: req.body.userId,   //ID du user connecté
            title: req.body.title,   //Titre de la photo
            imageUrl: req.body.imageUrl,    //url de l'image
            description: req.body.description,
        });

        //Sauvegarde dans la DB
        const savedPhoto = await newPhoto.save();
        res.status(201).json(savedPhoto); //Réponse avec la photo sauvegardée
    } catch (err) {
        res.status(500).json(err); //Gestion des erreurs
    }
});

//Récupération des photos d'un user 
router.get('/:userId', async (req, res) => {
    try {
        //Recherche des photos par ID user
        const photos = await Phooto.find({ userId: req.params.userId });
        res.status(200).json(photos); //Renvoie la liste des photos
    } catch (err) {
        res.status(500).json(err); //Gestion des erreurs
    }
});

module.exports = router;