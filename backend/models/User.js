const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Schéma user
const UserSchema = nex mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    //Statut premium : true = utilisateur Xamle Pro
    isPro: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

//hacher le password avant l'enregistrement
UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', UserSchema);