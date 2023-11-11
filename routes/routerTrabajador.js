const Router = require("express");

const { getAllTrabajadores, getTrabajadorByCargo, updateNombreTrabajador, addTrabajador } = require("../controllers/trabajadorController.js");

const router = Router();

router.get('/allTrabajadores', getAllTrabajadores);
router.get('/trabajador/:cargo', getTrabajadorByCargo);
router.put('/trabajador/:rut', updateNombreTrabajador);
router.post('/trabajador/add', addTrabajador);

module.exports = router;
