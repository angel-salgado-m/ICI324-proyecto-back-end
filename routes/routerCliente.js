const Router = require("express");

const { getAllClientes } = require("../controllers/clienteController.js");

const router = Router();

router.get('/allClientes', getAllClientes);

module.exports = router;
