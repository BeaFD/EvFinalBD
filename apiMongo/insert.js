const express = require('express')
require('./db')
const Propiedad = require('./Propiedad')

const app = express();
app.use(express.json())

app.post('/propiedades', (req, res) =>{
    const newPropiedad = new Propiedad(req.body);
    newPropiedad.save()
        .then(propiedad => res.status(201).json(propiedad))
        .catch(err => {
            console.error("Error al insertar la propiedad: ",err);
            res.status(500).json({error: 'Error interno del servidor.'})
        })
});

const port = process.env.PORT || 2002
app.listen(port, () => console.log(`Servidor compilado en el puerto ${port}`))