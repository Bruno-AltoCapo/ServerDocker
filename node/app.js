// node/app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Conexión a MongoDB
const mongoUser = 'xXxXXXX';
const mongoPassword = 'YyyYYYY';
const mongoURI = `mongodb+srv://${mongoUser}:${mongoPassword}@mongodbclase.o74rr.mongodb.net/test`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión:', err));

app.get('/', (req, res) => {
    res.send('Hola desde la aplicación Node.js!');
});

app.listen(port, () => {
    console.log(`Aplicación Node.js escuchando en http://localhost:${port}`);
});
