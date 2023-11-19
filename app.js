// Preparando express e importando middlewares
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';

import value from './utils/const.js';


const app = express(); //crear instancia app

// Opciones de CORS
const corsOptions = {
    credentials: true,
    optionSuccessStatus:200,
    methods: "GET, PUT, POST, DELETE",
    origin: '*'
};

//Configuraciones

app.set('port', value.RUN_PORT); //puerto de escucha
app.set('env', value.NODE_ENV); //entorno de ejecucion

//Middlewares
app.use(morgan('dev')); //ver peticiones por consola
app.use(cors(corsOptions)); //Ingresa configuracion de CORS
app.use(express.json({limit: '500MB'}));
app.use(express.urlencoded({extended:true})); 


//ENDPOINTs
import routerCliente from './routes/routerCliente.js';
import routerTrabajador from'./routes/routerTrabajador.js';
import routerConsultas from'./routes/routerConsultas.js';
import routerSector from './routes/routerSector.js';

app.use('/cliente', routerCliente);
app.use('/trabajador', routerTrabajador);
app.use('/consulta', routerConsultas);
app.use('/sector', routerSector);

app.listen(value.RUN_PORT, function () {
    console.log("Server listening at: " + value.RUN_PORT);
  });

export default app;