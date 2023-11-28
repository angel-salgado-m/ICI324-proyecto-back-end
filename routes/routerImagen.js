import Router from "express";
const routerImagen = Router();


import sqlImagen from "../controllers/imagen/sql/imagenController.js";
import nosqlImagen from "../controllers/imagen/nosql/imagenController.js";

// CRUD
routerImagen.get('/getImagen/:id/:typeBd', sqlImagen.getImagen, nosqlImagen.getImagen); // SQL y NoSQL
routerImagen.post('/addImagen/:typeBd', nosqlImagen.crearImagen);                       // NoSQL
routerImagen.delete('/deleteImagen/:id/:typeBd', nosqlImagen.eliminarImagen);           // NoSQL

export default routerImagen;