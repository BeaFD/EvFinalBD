const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://bearodriguez239:Jaji7904@clusterbea.xlifov3.mongodb.net/ev3?retryWrites=true&w=majority&appName=ClusterBea'

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado a la base de datos.'))
.catch(err => console.log(err))

module.exports = mongoose