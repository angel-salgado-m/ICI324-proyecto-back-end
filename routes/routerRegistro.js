import Router from "express";
const routerRegistro = Router();


import sqlRegistro  from "../controllers/registro/sql/registroController.js";

routerRegistro.get('/allRegistros/:typeBd', sqlRegistro.listarRegistros);
routerRegistro.get('/:id/:typeBd', sqlRegistro.listarById);

export default routerRegistro;