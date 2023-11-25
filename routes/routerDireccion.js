import Router from "express";
const routerDireccion = Router();


import sqlDireccion  from "../controllers/direccion/sql/direccionController.js";

routerDireccion.get('/allDirecciones/:typeBd', sqlDireccion.listarDirecciones);
routerDireccion.get('/:id/:typeBd', sqlDireccion.listarById);

export default routerDireccion;