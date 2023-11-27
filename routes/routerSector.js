import Router from "express";
const routerSector = Router();

import sqlSector from "../controllers/sector/sql/sectorController.js";

routerSector.get('/allSectores/:typeBd', sqlSector.listarSectores);
routerSector.get('/:id/:typeBd', sqlSector.listarById);

export default routerSector;