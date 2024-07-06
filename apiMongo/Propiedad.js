const mongoose = require('mongoose')

const PropiedadSchema = new mongoose.Schema({
        _id:{type: String, require: true},
        tipo: String,
        direccion: String,
        comuna: String,
        Región: String,
        superficie: Number,
        dormitorios: Number,
        baños: Number,
        precio: Number,
        estado: String,  
})

const Propiedad = mongoose.model('Propiedad', PropiedadSchema, 'propiedades')
module.exports = Propiedad
