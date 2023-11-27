import Router from "express";
const routerCliente = Router();


import sqlCliente  from "../controllers/cliente/sql/clienteController.js";
import nosqlCliente  from "../controllers/cliente/nosql/clienteController.js";

routerCliente.get('/allClientes/:typeBd', sqlCliente.listarClientes, nosqlCliente.listarClientes);
routerCliente.get('/:id/:typeBd', sqlCliente.listarById, nosqlCliente.listarById);
routerCliente.put('/cambiarNombre/:id/:typeBd', sqlCliente.cambiarNombre);
routerCliente.post('/crearCliente/:typeBd', nosqlCliente.crearCliente);

export default routerCliente;
