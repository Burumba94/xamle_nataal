const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth');
const photoRoute = require('./routes/photo');
const userRoute= require('./routes/user');

dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/photo', photoRoute);
app.use('/api/users', userRoute)
app.use(cors({origin: "http://localhost:5173", credentials: true})); // origine du frontend

//routes
app.get('/', (req, res) => {
    res.send('Welcome to Xamle Nataal Backend!');
});


//MongoDB connection 
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Erreur de connexion MongoDb', err));

const PORT = process.env.PORT || 5026;
app.listen(PORT, () => console.log(`Server activated on port ${PORT} `));