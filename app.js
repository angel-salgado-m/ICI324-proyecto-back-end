// Preparando express e importando middlewares
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

//archivo de la configuracion de bd 
require('./utils/db.js');
const app = express(); //crear instancia app

const port = process.env.SERVER_PORT ?? 3030;

// Opciones de CORS
const corsOptions = {
    credentiasl: true,
    optionSuccessStatus:200,
    methods: "GET, PUT, POST, DELETE",
    origin: '*'
};

app.use(cors(corsOptions));
app.use(express.json({limit: '500MB'}));
app.use(express.urlencoded({extended:true}));


//ENDPOINTs
const routerCliente = require('./routes/routerCliente.js');
const routerTrabajador = require('./routes/routerTrabajador.js');
const routerConsultas = require('./routes/routerConsultas.js');
const routerSector = require('./routes/routerSector.js');

app.use('/cliente', routerCliente);
app.use('/trabajador', routerTrabajador);
app.use('/consulta', routerConsultas);
app.use('/sector', routerSector);

app.listen(port, function () {
    console.log("Server listening at: " + port);
  });