import Router from "express";
const routerSector = Router();

import sqlSector from "../controllers/sector/sql/sectorController.js";
import nosqlSector from "../controllers/sector/nosql/sectorController.js";

//CRUD
routerSector.get('/allSectores/:typeBd', sqlSector.listarSectores, nosqlSector.getSectores);                       // SQL y NoSQL
routerSector.post('/addSector/:typeBd', nosqlSector.createSector);                                                 // SQL y NoSQL
routerSector.delete('/deleteSector/:id/:typeBd', nosqlSector.deleteSector);                                        // NoSQL

routerSector.get('/:id/:typeBd', sqlSector.listarById);                                                            // SQL

export default routerSector;