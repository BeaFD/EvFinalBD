const express = require('express')
require('./db')
const Propiedad = require('./Propiedad')

const app = express();
app.use(express.json())

app.delete('/propiedades/:id', (req, res) =>{
    Propiedad.findByIdAndDelete(req.params.id)
    .then(propiedad => {
        if(!propiedad){
            return res.status(404).json({message: 'Propiedad no encontrada.'})
        }
        res.json({message: 'Eliminando propiedad.'})
    })
    .catch(err => {
        console.error("Error al eliminar la propiedad: ", err)
        res.status(500).json({error: `Error interno del servidor.`})
    }); 
});

const port = process.env.PORT || 2004
app.listen(port, () => console.log(`Servidor compilado en el puerto ${port}`))