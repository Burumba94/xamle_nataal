const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Route d'activation du statut pro d'un user
router.put('/upgrade/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { isPro: true },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.status(200).json({
            message: 'Compte mis à jour avec succès. Statut Pro activé !',
            user: updatedUser,
        });
    } catch (err) {
        res.status(50).json({ message: 'Erreur serveur', error: err.message });
    }
});

module.exports = router;