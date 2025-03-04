const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

//Inscription
router.post('/register', async (req, res) => {
    try {
        const {username, email password} = req.body;

        //Verifier si le user existe deja
        const existingUser = await User.findOne ({ email });
        if (existingUser) return res.status(400).json({ message: "Cet utilisateur existe déja"});


        //hasher le password et creer un nouvel user
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//connexion
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json("User not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(404).json("Your password is wrong");

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '20d'});
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;