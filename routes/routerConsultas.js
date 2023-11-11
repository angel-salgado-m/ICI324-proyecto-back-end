const Router = require("express");
const router = Router();

const { getConsultaById } = require('../controllers/consultasController.js');

router.get('/consulta/:id', getConsultaById);

module.exports = router;