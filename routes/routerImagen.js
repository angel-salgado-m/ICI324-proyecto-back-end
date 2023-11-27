import Router from "express";
const routerImagen = Router();


import sqlImagen from "../controllers/imagen/sql/imagenController.js";

routerImagen.get('/getImagen/:id/:typeBd', sqlImagen.getImagen);

export default routerImagen;