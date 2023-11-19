import Router from "express";
const router = Router();

import { getConsultaById } from '../controllers/consultasController.js';

router.get('/consulta/:id', getConsultaById);

export default router;