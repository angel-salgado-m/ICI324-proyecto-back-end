import Router from "express";
const router = Router();

import { getAllTrabajadores, getTrabajadorByCargo, updateNombreTrabajador, addTrabajador } from "../controllers/trabajadorController.js";

router.get('/allTrabajadores', getAllTrabajadores);
router.get('/trabajador/:cargo', getTrabajadorByCargo);
router.put('/trabajador/:rut', updateNombreTrabajador);
router.post('/trabajador/add', addTrabajador);

export default router;
