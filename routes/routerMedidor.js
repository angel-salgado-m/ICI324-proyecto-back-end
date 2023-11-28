import Router from "express";
const routerMedidor = Router();


import sqlMedidor  from "../controllers/medidor/sql/medidorController.js";
import nosqlMedidor  from "../controllers/medidor/nosql/medidorController.js";

// CRUD
routerMedidor.get('/allMedidores/:typeBd', sqlMedidor.listarMedidores, nosqlMedidor.getMedidores);  // SQL y NoSQL
routerMedidor.put('/:id/:typeBd', sqlMedidor.modificarSerial, nosqlMedidor.modificarSerial);        // SQL y NoSQL
routerMedidor.post('/:typeBd', nosqlMedidor.createMedidor);                                         // NoSQL
routerMedidor.delete('/:id/:typeBd', nosqlMedidor.deleteMedidor);                                 // NoSQL

routerMedidor.get('/:id/:typeBd', sqlMedidor.listarById, nosqlMedidor.getMedidorById);              // SQL y NoSQL   

export default routerMedidor;