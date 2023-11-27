import Router from "express";
const routerMedidor = Router();


import sqlMedidor  from "../controllers/medidor/sql/medidorController.js";

routerMedidor.get('/allMedidores/:typeBd', sqlMedidor.listarMedidores);
routerMedidor.get('/:id/:typeBd', sqlMedidor.listarById);
routerMedidor.put('/:id/:typeBd', sqlMedidor.modificarSerial);

export default routerMedidor;