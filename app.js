// Preparando express e importando middlewares
import path from 'path';
import { fileURLToPath } from 'url';  // Para obtener directorio actual (Se puede cambiar?)
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import { conexionSql, Cliente, Direccion, Imagen, Medidor, Registro, Sector, Trabajador } from './utils/sequelizeConnection.js';
import dbMongo from './utils/mongoConnection.js';

import value from './utils/const.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Obtener directorio actual (Se puede cambiar?)

const app = express(); //crear instancia app

// Opciones de CORS
const corsOptions = {
    credentials: true,
    optionSuccessStatus:200,
    methods: "GET, PUT, POST, DELETE, OPTIONS",
    origin: 'http://localhost:3000'
};

//Configuraciones

app.set('port', value.RUN_PORT); //puerto de escucha
app.set('env', value.NODE_ENV); //entorno de ejecucion

//Middlewares
app.use(morgan('dev')); //ver peticiones por consola
app.use(cors(corsOptions)); //Ingresa configuracion de CORS
app.use(express.json({limit: '500MB'}));
app.use(express.urlencoded({extended:true})); 
app.use('/Images', express.static('./Images'));

/*Endpoint predeterminado que devuelve la documentacion de la API (En proceso)
TODO:
- [] Como hacer legible el Markdown o como convertirlo a HTML.
- [] Ver si es seguro usar las funcion path.join.
*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'readme.md'));
  }
);



//ENDPOINTs
import routerCliente from './routes/routerCliente.js';
import routerDireccion from './routes/routerDireccion.js';
import routerMedidor from './routes/routerMedidor.js';
import routerRegistro from './routes/routerRegistro.js';
import routerSector from './routes/routerSector.js';
import routerTrabajador from './routes/routerTrabajador.js';
import routerImagen from './routes/routerImagen.js';




app.use('/cliente', routerCliente);
app.use('/direccion', routerDireccion);
app.use('/medidor', routerMedidor);
app.use('/trabajador', routerTrabajador);
app.use('/registro', routerRegistro);
app.use('/sector', routerSector);
app.use('/imagen', routerImagen);

app.listen(value.RUN_PORT, function () {
    console.log("Server listening at: " + value.RUN_PORT);
  });

export default app;