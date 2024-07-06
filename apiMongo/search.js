const express = require('express');
const mongoose = require('mongoose');
const Propiedad = require('./Propiedad');
require('./db');

const app = express();
app.use(express.json()); // middleware para parsear Json

app.get('/propiedades/:id', (req, res) => {
    Propiedad.findOne({_id: req.params.id})
    .then(propiedad => {
        if (!propiedad) {
            return res.status(404).json({message: 'Propiedad no encontrada.'});
        } else {
            res.json(propiedad);
        }
    })
    .catch(err => {
        console.error("Error al buscar la propiedad:", err);
        res.status(500).json({error: 'Error interno del servidor.'});
    });
});

// Inicializar el Servidor o API
const port = process.env.PORT || 2001;
app.listen(port, () => console.log(`Servidor ejecutado en el puerto ${port}`));
