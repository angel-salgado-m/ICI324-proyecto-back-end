import Router from "express";
const router = Router();

import { updateSucursal } from '../controllers/sectorController.js';

router.put('/sector/:id', updateSucursal);

export default router;