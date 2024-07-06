const express = require('express');
require('./db')
const Propiedad = require('./Propiedad');
const { use } = require('express/lib/application');

const app = express()
app.use(express.json())

app.put('/propiedades/:id', (req, res) =>{
    Propiedad.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(propiedad => {
        if(!propiedad){
            return res.status(404).json({message: 'Propiedad no encontrada'})
        }
        res.json(propiedad)
    })
    .catch(err => {
        console.error("Error al actualizar la propiedad: ", err);
        res.status(500).json({error: 'Error interno del Servidor.'});
    });
})

const port = process.env.PORT || 2003
app.listen(port, () => console.log(`Servidor compilado desde el puerto ${port}.`))