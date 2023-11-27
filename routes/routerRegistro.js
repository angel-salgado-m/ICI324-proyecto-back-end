import Router from "express";
const routerRegistro = Router();


import { sqlRegistro, upload }  from "../controllers/registro/sql/registroController.js";

routerRegistro.get('/allRegistros/:typeBd', sqlRegistro.listarRegistros);
routerRegistro.get('/allInconclusos/:typeBd', sqlRegistro.listarInconclusos);
routerRegistro.get('/:id/:typeBd', sqlRegistro.listarById);
routerRegistro.get('/hoy/:estado/:typeBd', sqlRegistro.registrosHoy);
routerRegistro.get('/antes/:estado/:typeBd', sqlRegistro.registrosAnteriores);
routerRegistro.post('/crearRegistro/:typeBd',upload.single('image'), sqlRegistro.crearRegistro);


export default routerRegistro;