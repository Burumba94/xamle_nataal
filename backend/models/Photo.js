const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true }, //Titre de la photo 
    imageUrl: { type: String, required: true }, //URL de l'image
    description: { type: String }, // Description optionnelle
}, { timestamps: true }); // Ajoute les champs `creaedAt`et `updateAt`

module.exports = mongoose.model('Photo', PhotoSchema);