const Router = require("express");
const router = Router();

const { updateSucursal } = require('../controllers/sectorController.js');

router.put('/sector/:id', updateSucursal);

module.exports = router;