import Router from "express";
const routerCliente = Router();


import sqlCliente  from "../controllers/cliente/sql/clienteController.js";

routerCliente.get('/allClientes/:typeBd', sqlCliente.listarClientes);
routerCliente.get('/:id/:typeBd', sqlCliente.listarById);

export default routerCliente;
