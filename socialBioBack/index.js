//Imports
const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
//------------------------------------------------------------------------------------------------------------

//Creo port para indicar el puerto en el que va a funcionar el servidor
const port = 3500;
//------------------------------------------------------------------------------------------------------------

//Middlewares
app.use(express.json());
//------------------------------------------------------------------------------------------------------------

//Routes
app.use(require('./routes/Usuarios'));
app.use(require('./routes/Publicaciones'));
app.use(require('./routes/Interacciones'));
app.use(require('./routes/Consultas'));
app.use(require('./routes/Imagenes'));


//------------------------------------------------------------------------------------------------------------

//Levantando el server con express
app.listen(port,function(err){
    if(err) throw err;
    console.log('App escuchando en http://localhost:'+port);
});
//------------------------------------------------------------------------------------------------------------