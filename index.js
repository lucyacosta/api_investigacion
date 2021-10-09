//Con este codigo o sintaxis se importa todo el modulo expres en nodejs
const express = require('express');
require('dotenv').config();
const { dbConection } = require('./config/database');
const cors = require('cors');

//creamos el servidor express
const app = express();

//los cors deben estar despues del express
//Estableciendo configuracion de cors
app.use(cors());
app.use(express.json());

//crear la conexion a la base de datos
dbConection();

//verificando variables de entorno
//console.log(process.env);

//creamos las rutas de mi app
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.route'));
//app.use('api/investigadores', require ('./routes/investigadores.routes'))

//codigo para desplegar el servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor Nodejs desplegado en el puerto:' + process.env.PORT)
})



//password de la BD: // PYgrfe8iHFzhWHcx
// Usuario: adminproject