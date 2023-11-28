import Router from "express";
const routerTrabajador = Router();


import sqlTrabajador  from "../controllers/trabajador/sql/trabajadorController.js";
import nosqlTrabajador from "../controllers/trabajador/nosql/trabajadorController.js";

//CRUD
routerTrabajador.get('/allTrabajadores/:typeBd', sqlTrabajador.listarTrabajadores, nosqlTrabajador.getTrabajadores); // SQL y NoSQL
routerTrabajador.post('/signup/:typeBd', sqlTrabajador.crearTrabajador, nosqlTrabajador.createTrabajador);           // SQL y NoSQL
routerTrabajador.delete('/deleteTrabajador/:id/:typeBd', nosqlTrabajador.deleteTrabajador);                          // NoSQL

routerTrabajador.post('/login/:typeBd', sqlTrabajador.validarTrabajador);                                            // SQL

export default routerTrabajador;