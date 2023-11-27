import Router from "express";
const routerDireccion = Router();


import sqlDireccion  from "../controllers/direccion/sql/direccionController.js";

routerDireccion.get('/allDirecciones/:typeBd', sqlDireccion.listarDirecciones);
routerDireccion.get('/:id/:typeBd', sqlDireccion.listarById);
routerDireccion.put('/:id/:typeBd', sqlDireccion.cambiarDatos);

export default routerDireccion;