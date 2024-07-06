const express = require('express')
const mongoose = require('mongoose')
const Propiedad = require('./Propiedad')
require ('./db')

const app = express();
app.use(express.json()) // middleware para parsear Json

app.get('/', (req, res) => {
    Propiedad.find()
    .then(propiedades => {
        if (propiedades.length > 0){
            res.json(propiedades);
        }else{
            res.json({message: 'No se encontraron datos en la coleccion Propiedades.'})
            
        }
    })
    .catch(err => {
        console.error("Error al buscar propiedades: ", err);
        res.status(500).json({error: 'Error interno del Servidor.'})
    });
});

//Inicializar el Servidor o API
const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Servidor ejecutado en el puerto ${port}`));


