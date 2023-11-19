import Router from "express";
const router = Router();

import { getAllClientes } from "../controllers/clienteController.js";

router.get('/allClientes', getAllClientes);

export default router;
