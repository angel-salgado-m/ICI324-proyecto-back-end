import Router from "express";
const routerCliente = Router();


import sqlCliente  from "../controllers/cliente/sql/clienteController.js";
import nosqlCliente  from "../controllers/cliente/nosql/clienteController.js";

//CRUD
routerCliente.get('/allClientes/:typeBd', sqlCliente.listarClientes, nosqlCliente.listarClientes);  //SQL y NoSQL 
routerCliente.put('/cambiarNombre/:id/:typeBd', sqlCliente.cambiarNombre, nosqlCliente.cambiarNombre); //SQL y NoSQL
routerCliente.post('/crearCliente/:typeBd', nosqlCliente.crearCliente); //NoSQL
routerCliente.delete('/eliminarCliente/:id/:typeBd', nosqlCliente.eliminarCliente); //NoSQL


routerCliente.get('/:id/:typeBd', sqlCliente.listarById, nosqlCliente.listarById);  //SQL y NoSQL


export default routerCliente;
