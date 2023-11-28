import Router from "express";
const routerRegistro = Router();


import { sqlRegistro, upload }  from "../controllers/registro/sql/registroController.js";
import nosqlRegistro from "../controllers/registro/nosql/registroController.js";

//CRUD 
routerRegistro.get('/allRegistros/:typeBd', sqlRegistro.listarRegistros, nosqlRegistro.getRegistros);                       // SQL y NoSQL
routerRegistro.post('/addReg/:typeBd',upload.single('image'), sqlRegistro.crearRegistro, nosqlRegistro.createRegistro);     // SQL y NoSQL
routerRegistro.delete('/deleteReg/:id/:typeBd', nosqlRegistro.deleteRegistro);                                              // NoSQL

routerRegistro.get('/allInconclusos/:typeBd', sqlRegistro.listarInconclusos);                                               // SQL
routerRegistro.get('/:id/:typeBd', sqlRegistro.listarById, nosqlRegistro.getRegistroById);                                  // SQL y NoSQL 
routerRegistro.get('/hoy/:estado/:typeBd', sqlRegistro.registrosHoy);                                                       // SQL
routerRegistro.get('/antes/:estado/:typeBd', sqlRegistro.registrosAnteriores);                                              // SQL


export default routerRegistro;