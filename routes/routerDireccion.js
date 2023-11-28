import Router from "express";
const routerDireccion = Router();

import sqlDireccion  from "../controllers/direccion/sql/direccionController.js";

// CRUD

routerDireccion.get('/allDirecciones/:typeBd', sqlDireccion.listarDirecciones); 
routerDireccion.get('/obtenerPorId/:id/:typeBd', sqlDireccion.listarById);
routerDireccion.put('/updateDireccion/:id/:typeBd', sqlDireccion.cambiarDatos);
routerDireccion.get('/dxs/:id/:typeBd', sqlDireccion.listarPorIdSector);
routerDireccion.get('/dp/:id/:typeBd', sqlDireccion.dp);

export default routerDireccion;