const mysql2 = require('mysql2/promise');
const connectionConfig = require('../utils/db.js');

const createConnection = async ( ) => {
    return await mysql2.createConnection(connectionConfig);
}

const queries = {
    // Consulta SELECT 1: Mostrar a todos los trabajadores y sus sectores. 
    1: 'SELECT trabajador.*, sector.sucursal FROM trabajador LEFT JOIN sector ON trabajador.idSectores = sector.idSector;',
    // Consulta SELECT 2: Mostrar todas las direcciones y los nombres de los clientes correspondientes.
    2: 'SELECT direccion.*, cliente.nombre AS nombre_cliente FROM direccion INNER JOIN cliente ON direccion.idCliente = cliente.idCliente;',
    // Consulta SELECT 3: Seleccionar todos los trabajadores y sus respectivos sectores y rutas
    3: 'SELECT trabajador.*, sector.sucursal, ruta.idRuta FROM trabajador LEFT JOIN sector ON trabajador.idSectores = sector.idSector LEFT JOIN ruta ON sector.idRuta = ruta.idRuta;',
    // CONSULTA SELECT 4: Obtener todas las direcciones de una sucursal específica:
    4: "SELECT direccion.* FROM direccion INNER JOIN sector ON direccion.idSector = sector.idSector WHERE sector.sucursal = 'Sucursal D' ;",
    // CONSULTA SELECT 5: Listar todos los registros que son del tipo 'Novedad'
    5: "SELECT * FROM registro WHERE registro.tipo = 'Novedad';",
};

const getConsultaById = async (req, res) => {
    try {
        const consulta = queries[req.params.id];

        if (!consulta) {
            return res.status(400).json({
              status: false,
              error: "Consulta no encontrada"
            });
        }
        console.log("Usando metodo getConsultaById");
        const connection = await createConnection();
        const [rows] = await connection.execute(consulta);
        await connection.end();
  
        return res.status(200).json({
            success: true,
            trabajadores: rows
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: "Problema al obtener la consulta",
            code: error
        });
    }
};


module.exports = {
    getConsultaById
};
