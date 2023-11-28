import Router from "express";
const routerDireccion = Router();

import sqlDireccion  from "../controllers/direccion/sql/direccionController.js";
import nosqlDireccion from "../controllers/direccion/nosql/direccionController.js";

// CRUD
routerDireccion.get('/allDirecciones/:typeBd', sqlDireccion.listarDirecciones, nosqlDireccion.listarDirecciones); // SQL y NoSQL
routerDireccion.put('/updateDireccion/:id/:typeBd', sqlDireccion.cambiarDatos, nosqlDireccion.cambiarDatos);      // SQL y NoSQL
routerDireccion.post('/addDireccion/:typeBd', nosqlDireccion.crearDireccion);                                     // NoSQL
routerDireccion.delete('/deleteDireccion/:id/:typeBd', nosqlDireccion.eliminarDireccion);                         // NoSQL

routerDireccion.get('/obtenerPorId/:id/:typeBd', sqlDireccion.listarById, nosqlDireccion.listarById);             // SQL y NoSQL

routerDireccion.get('/dxs/:id/:typeBd', sqlDireccion.listarPorIdSector);                                          // SQL 
routerDireccion.get('/dp/:id/:typeBd', sqlDireccion.dp);                                                          // SQL

export default routerDireccion;