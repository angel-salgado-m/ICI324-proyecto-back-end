import Router from "express";
const routerTrabajador = Router();


import sqlTrabajador  from "../controllers/trabajador/sql/trabajadorController.js";

routerTrabajador.get('/allTrabajadores/:typeBd', sqlTrabajador.listarTrabajadores);
routerTrabajador.get('/:id/:typeBd', sqlTrabajador.listarById);
routerTrabajador.post('/signup/:typeBd', sqlTrabajador.crearTrabajador);
routerTrabajador.post('/login/:typeBd', sqlTrabajador.validarTrabajador);

export default routerTrabajador;